//The purpose of this file is to clear web assets
var fs = require('fs');
var colors = require('colors/safe');

const packageJsonDirectories = require('.././package.json').directories;

const appDirectory = __dirname + '/../';
const photonTargetDir = appDirectory + packageJsonDirectories.photonTargetDir;
const assetsTargetDir = appDirectory + packageJsonDirectories.assetsTargetDir;

//Remove web content
fs.unlink(photonTargetDir, function(){});
fs.unlink(assetsTargetDir, function(){});
console.log(colors.green('Symlinks were cleared!'));
