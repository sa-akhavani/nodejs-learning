var fs = require('fs');

// Create Read Stream with chunks of size: 3 KiloBytes
var readable = fs.createReadStream(__dirname + '/text', {encoding: 'utf8', highWaterMark: 3 * 1024});

var writable = fs.createWriteStream(__dirname + '/newText');
readable.on('data', function(chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});