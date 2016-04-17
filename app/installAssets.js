//The purpose of this file is to copy (using a symlink) photon-power-uit-kit assets into web directory
var fs = require('fs');

//Photon-power-ui-kit source/target
var sourceFolderPhoton = __dirname + '/../node_modules/photon-power-ui-kit/dist';
var targetFolderPhoton = __dirname + '/../web/photon';

//Custom assets source/target
var sourceFolderSrcAssets = __dirname + '/../src/custom_assets';
var targetFolderSrcAssets = __dirname + '/../web/assets';

function symlinkCallback(data) {
    if(data) {
      console.log("An error appeared. You should verify that web directory is created!");
    } else {
      console.log("Symlinks were created!");
    }
}

//Create symlinks
fs.symlink(sourceFolderPhoton, targetFolderPhoton, symlinkCallback);
fs.symlink(sourceFolderSrcAssets, targetFolderSrcAssets, symlinkCallback);
