var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log(req.url);
    next();
});

app.get('/', function (req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /><title>Sag!</title><head><body>Hello!</body></html>');
});

app.get('/api/:id', function (req, res) {
    res.json({name: 'ali', familyName: 'akhavani', id: req.params.id});
});

app.listen(port);