if [ -d "build" ]; then rm -rf build; fi
mkdir build
zip build/extension.zip add-links.js Help-48x48.png Help-128x128.png LICENSE manifest.json
