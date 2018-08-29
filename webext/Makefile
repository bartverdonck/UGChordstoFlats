all: clean webext

clean-firefox:
	-rm -r FlatUG_Firefox*
clean-chrome:
	-rm -r FlatUG_Chrome*
clean: clean-firefox clean-chrome


webext-firefox:
	cp -R common FlatUG_Firefox
	cp ../UGChordsToFlats.js FlatUG_Firefox
	cp firefox/* FlatUG_Firefox
	cd FlatUG_Firefox; zip -qr ../FlatUG_Firefox.zip .

webext-chrome:
	cp -R common FlatUG_Chrome
	cp ../UGChordsToFlats.js FlatUG_Chrome
	cp chrome/* FlatUG_Chrome
	sed -i "s/browser\./chrome\./" FlatUG_Chrome/popup.js
	cd FlatUG_Chrome; zip -qr ../FlatUG_Chrome.zip .

webext: webext-firefox webext-chrome
