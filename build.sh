if [ -d "build" ]; then rm -rf build; fi
mkdir build
zip build/extension.zip add-links.js Help-Green-48x48.png Help-Green-128x128.png LICENSE manifest.json
