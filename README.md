# Table of Contents
1. [About UGChordstoFlats](#about-ugchordstoflats)
2. [How to use](#how-to-use)

# About UGChordstoFlats
Changes sharp chords into flat chords on the site [Ultimate Guitar](www.ultimate-guitar.com/). Most useful in the context of transposition.

This implementation is a fork from https://github.com/hongjes1/UGChordstoFlats.

Actually, it has been competely rewritten; the visible differences are:
* rewrite only the sharped chords (the original implementation was also rewriting B into Cb for instance)
* deactivate chord diagrams to prevent chord reset (on mouse over)
* works with all chord names, without limitation; the only assumption is that the '#' is the second character (second character after '/' for bass notes)

# How to use
## As a browser extension
For Firefox:
https://addons.mozilla.org/en-US/firefox/addon/ug-chords-to-flats/

For Chrome:
https://chrome.google.com/webstore/detail/ug-chords-to-flats/denhegbijdfbckdmjjmjbcfdhjogadlh

When viewing a chord tab on the UG web site, simply click the "bUG" button at the right of the address bar, then the "b" (flat) button that appears, that will rewrite sharp chords into flat chords.

## With the browser console
1. Open a tab's page.
2. Open the javascript console:<br/>
   **Chrome**: CTRL+SHIFT+J (Mac: COMMAND+OPTION+J)<br/>
   **Firefox**: CTRL+SHIFT+K (Mac: COMMAND+OPTION+K)<br/>
   other browsers: search the web for "open console \<browser\>"  
3. Copy/paste the code from __UGChordsToFlats.js__ into the console, then press ENTER.

Note: the chord diagrams are deactivated, because the code that displays them also resets the chord names.

[Back to top](#table-of-contents)
