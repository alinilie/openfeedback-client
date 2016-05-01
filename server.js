//The purpose of this file is to offer the basic routing for project and implement server side rendering for React.js

//Set require of files to support jsx format
require('babel-core/register')({
  presets: ['react']
});

// ---------------------- Modules ----------------------
var express = require('express');
var app = express();
var swig = require('swig');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

// ---------------------- Set rendering and swig template engine settings ----------------------
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', false);
app.use(express.static(__dirname + '/web'));
swig.setDefaults({ cache: false });
app.set('views', __dirname + '/src/views');

// ---------------------- Layouts ----------------------
var LoginLayout = React.createFactory(require('./src/custom_assets/js/react_pages/server/login.jsx').LoginLayout);

// ---------------------- General routes ----------------------
app.get('/login', function(req, res) {
  res.render('pages/login', { loginHtml: ReactDOMServer.renderToString(LoginLayout()) });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
