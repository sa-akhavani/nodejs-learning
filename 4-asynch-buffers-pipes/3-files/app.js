var fs = require('fs');

// This is Syncronous
var myFile = fs.readFileSync(__dirname + '/hello', 'utf8');
console.log(myFile);

// This is Asynchronus
var myNewFile = fs.readFile(__dirname + '/hello', 'utf8', function(err, data) {
    console.log(data);
});

console.log('Man Injam!');