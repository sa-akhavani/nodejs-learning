var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/text.txt');
var writable = fs.createWriteStream(__dirname + '/newText.txt');
var compressedFile = fs.createWriteStream(__dirname + '/newText.txt.gz');
var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressedFile);