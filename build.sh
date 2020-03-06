if [ -d "build" ]; then rm -rf build; fi
mkdir build
zip build/extension.zip add-links.js Help-Green-48x48.jpg Help-Green-128x128.jpg LICENSE manifest.json
