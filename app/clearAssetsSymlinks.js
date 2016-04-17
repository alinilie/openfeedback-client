//The purpose of this file is to clear web assets
var fs = require('fs');

const packageJsonDirectories = require('.././package.json').directories;

const appDirectory = __dirname + '/../';
const photonTargetDir = appDirectory + packageJsonDirectories.photonTargetDir;
const assetsTargetDir = appDirectory + packageJsonDirectories.assetsTargetDir;

//Remove web content
fs.unlink(photonWebDir, function(){});
fs.unlink(srcWebDir, function(){});
console.log('Symlinks were cleared!');
