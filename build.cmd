if not exist "build" mkdir build
del build\extension.zip
7z a build\extension.zip add-links.js Help-48x48.png Help-128x128.png LICENSE manifest.json