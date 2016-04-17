//The purpose of this file is to create a web directory for assets to be installed
//This is needed because web/* is set on ignore on (.gitignore)
var fs = require('fs');

var webDirectoryLocation = __dirname + '/../web';
fs.mkdir(webDirectoryLocation, function(data){
  if(data) {
    console.log("Web directory already exists. Skipping step!");
  } else {
    console.log("Web directory was created!");
  }
});
