var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = 'Hello World!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
};

var greet1 = new Greetr();
greet1.on('greet', function(data) {
	console.log('Someone Greeted: ' + data);
})

greet1.greet('Ali');