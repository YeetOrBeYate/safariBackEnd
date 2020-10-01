var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.listen(port);

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.post('/v1/pushPackages/web.com.herokuapp.hakonieminotification', function (req, res) {
  res.sendFile('SamuliHakoniemi.pushpackage.zip');
});

app.post('/v1/log', function (req, res) {
})