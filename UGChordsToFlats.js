// Next note letter within [A-G]
function nextLetter(letter) {
    if (letter == "G") {
        return "A";
    }
    return String.fromCharCode(letter.charCodeAt(0) + 1);
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
    elClone = chordEl.cloneNode(true);
    chordEl.parentNode.replaceChild(elClone, chordEl);
}

// Core function, processes all chord names within the current page.
// Chord names are of the form "[A-G][b#]?[^/]*(/[A-G][b#]?)?".
// Sharp chords are replaced by their enharmonic flat chord,
// considering both the fundamental and the bass note, if any.
// For instance: "A#7/G#" is replaced by "Bb7/Ab".
function sharp2flat() {
    const CHORD_CLASS = "_3L0Da"; // _3f5kI
    var chordEls = document.getElementsByClassName(CHORD_CLASS);
    for (var i = 0; i < chordEls.length; i++) {
        deactivateMouseEvents(chordEls[i]);

        var chord = chordEls[i].innerHTML;
        var parts = chord.split("/");
        for (var p = 0; p < parts.length; p++) {
            if (parts[p].length >= 2 && parts[p][1] == "#") {
                var current = parts[p][0];
                // input has no E# or B#, so no risk to make it wrong (Fb and Cb)
                var changed = nextLetter(current);
                parts[p] = changed + "b" + parts[p].substring(2);
            }
        }
        var newChord = parts.join("/");
        if (newChord != chord) {
            chordEls[i].isContentEditable = true;
            chordEls[i].innerHTML = newChord;
            chordEls[i].isContentEditable = false;
        }
    }
}

sharp2flat();
