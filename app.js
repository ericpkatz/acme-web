var express = require('express');
var path = require('path');
var swig = require('swig');
swig.setDefaults({ cache: false });

var app = express();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', (req, res, next)=> {
  res.render('index', { API_URL: process.env.API_URL, WS_URL: process.env.WS_URL });
});

module.exports = app;
