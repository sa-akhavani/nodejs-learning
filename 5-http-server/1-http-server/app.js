var http = require('http');
var fs = require('fs');

var message = 'Ali';

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});

    var htmlFile = fs.readFileSync(__dirname + '/myFile.html', 'utf8');
    htmlFile = htmlFile.replace('{Message}', message);
    res.end(htmlFile);
});

server.listen(5348, 'localhost');