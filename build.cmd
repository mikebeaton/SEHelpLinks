if not exist "build" mkdir build
del build\extension.zip
7z a build\extension.zip add-links.js Help-48x48.png LICENSE manifest.json