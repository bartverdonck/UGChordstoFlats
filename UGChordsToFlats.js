function nextLetter(letter) {
    if (letter == "G") {
        return "A";
    }
    return String.fromCharCode(letter.charCodeAt(0) + 1);
}

function deactivateMouseEvents(chordEl) {
    // no straight way to remove all listeners
    // but cloned elements have no listeners
    // chords are small nodes, so no perf issues
    elClone = chordEl.cloneNode(true);
    chordEl.parentNode.replaceChild(elClone, chordEl);
}

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
