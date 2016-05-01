//The purpose of this file is to require user input for installing browserify module as admin in order to have access to it in terminal
var colors = require('colors/safe');
console.log("Browserify let's you require modules in the browser");
console.log('Run following command as admin/root to install it: ' + colors.cyan('sudo npm install -g browserify'));
console.log("More info: http://browserify.org/");