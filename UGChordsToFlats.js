"use strict";

// Next note within [A-G].
// The given note may be a chord part, only the first character is considered.
function nextLetter(note) {
    if (note[0] == 'G') {
        return 'A';
    }
    return String.fromCharCode(note.charCodeAt(0) + 1);
}

// Return the flat enharmonic of the given chord part.
function flatEnharmonic(part) {
    if (part.length >= 2 && part[1] == '#') {
        // input has no E# or B#, so no risk to make it wrong (Fb and Cb)
        return nextLetter(part) + 'b' + part.substring(2);
    } else {
	return part;
    }
}

// Chord names are of the form "[A-G][b#]?[^/]*(/[A-G][b#]?)?".
// Examples: C, G7b9, F#m/C#, B/D#
// We can split chords into 2 parts, on either side of the '/' if any
// and process each part the same way to make its flat enharmonic.
// For instance: "A#7/G#" becomes "Bb7/Ab".
function chord2flat(chord) {
    var parts = chord.split('/');
    var flatParts = parts.map(flatEnharmonic);
    return flatParts.join('/');
}

// Chord listeners for mouseover and mouseleave events show/hide
// the chord diagram, with as side effect to reset chord names,
// thus cancelling all changes made by this extension.
// So we disable this feature, which anyway is presumably of little
// use to people who care about flat vs sharp chords.
function deactivateMouseEvents(chordEl) {
    // no straight way to remove all listeners
    // but cloned elements have no listeners
    // chords are small nodes, so no perf issues
    var elClone = chordEl.cloneNode(true);
    chordEl.parentNode.replaceChild(elClone, chordEl);
}

// Core function, processes all chords within the current page.
// Sharp chords are replaced by their enharmonic flat chord,
// considering both the fundamental and the bass note, if any.
function sharp2flat() {
    const CHORD_CLASS = "_3L0Da"; // _3f5kI

    var chordEls = document.getElementsByClassName(CHORD_CLASS);
    for (var i = 0; i < chordEls.length; i++) {
        deactivateMouseEvents(chordEls[i]);

        var chord = chordEls[i].innerHTML;
        chordEls[i].innerHTML = chord2flat(chord);
    }
}

sharp2flat();
