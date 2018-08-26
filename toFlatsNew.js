function nextLetter(letter) {
    if (letter == "G") {
        return "A";
    }
    return String.fromCharCode(current.charCodeAt(0) + 1);
}

var chordEls = document.getElementsByClassName("_3L0Da"); // _3f5kI
for (var i = 0; i < chordEls.length; i++) {
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
