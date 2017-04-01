var express = require('express');
var app = express();


var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('<html><head><title>Sag!</title><head><body>Hello!</body></html>');
});

app.get('/api/:id', function (req, res) {
    res.json({name: 'ali', familyName: 'akhavani', id: req.params.id});
});

app.listen(port);