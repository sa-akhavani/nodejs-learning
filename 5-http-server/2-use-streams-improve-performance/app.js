var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream(__dirname + '/myFile.html', 'utf8').pipe(res);
});

server.listen(5348, 'localhost');