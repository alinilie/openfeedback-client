//The purpose of this file is to copy (using a symlink) photon-power-uit-kit and custom assets into web directory
var fs = require('fs');

const packageJsonDirectories = require('.././package.json').directories;
const appDirectory = __dirname + '/../';

//Photon-power-ui-kit source/target
const sourceFolderPhoton = appDirectory + packageJsonDirectories.photonSourceDir;
const targetFolderPhoton = appDirectory + packageJsonDirectories.photonTargetDir;

//Custom assets source/target
const assetsSourceDir = appDirectory + packageJsonDirectories.assetsSourceDir;
const assetsTargetDir = appDirectory + packageJsonDirectories.assetsTargetDir;

function symlinkCallback(data) {
    if(data) {
      console.log("An error appeared. Web directory is not created or symylinks are already exists!");
    } else {
      console.log("Symlinks were created!");
    }
}

//Create symlinks
fs.symlink(sourceFolderPhoton, targetFolderPhoton, symlinkCallback);
fs.symlink(assetsSourceDir, assetsTargetDir, symlinkCallback);
