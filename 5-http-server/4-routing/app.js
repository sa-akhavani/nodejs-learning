var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/myFile.html', 'utf8').pipe(res);
    }
    else if (req.url == '/api') {
        res.writeHead(200, {'content-type': 'application/json'});
        var obj = {
            name: 'ali',
            id: 123
        };
        res.end(JSON.stringify(obj));        
    }
    else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(5348, 'localhost');