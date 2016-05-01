//The purpose of this file is to create a web directory for assets to be installed
//This is needed because web/* is set on ignore on (.gitignore)
var fs = require('fs');
var colors = require('colors/safe');

const packageJsonDirectories = require('.././package.json').directories;

const appDirectory = __dirname + '/../';
const webDirectory = appDirectory + packageJsonDirectories.web;

fs.mkdir(webDirectory, function(data){
  if(data) {
    console.log(colors.yellow("Web directory already exists. Skipping step!"));
  } else {
    console.log(colors.green("Web directory was created!"));
  }
});
