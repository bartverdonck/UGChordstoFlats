'use strict';

let ugFlat = document.getElementById('UGFlat');
ugFlat.onclick = function(element) {
    browser.tabs.executeScript(null, { file: "UGChordsToFlats.js" });
};
