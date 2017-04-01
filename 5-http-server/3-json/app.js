var http = require('http');
var fs = require('fs');

var message = 'Ali';

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'application/json'});
    var obj = {
        name: 'ali',
        id: 123
    };
    
    res.end(JSON.stringify(obj));
});

server.listen(5348, 'localhost');