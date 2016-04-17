//The purpose of this file is to clear web assets
var fs = require('fs');
var photonWebDir = __dirname + '/../web/photon';
var srcWebDir = __dirname + '/../web/assets';

//Remove web content
fs.unlink(photonWebDir, function(){});
fs.unlink(srcWebDir, function(){});
console.log('Symlinks were cleared!');
