// var Emitter = require('./emitter');
var Emitter = require('events');
var eventConfig = require('./config.js').events;

var emitter = new Emitter();

emitter.on(eventConfig.GREET, function() {
	console.log('Someone Barked!');
});

emitter.on(eventConfig.GREET, function() {
	console.log('YOOhaHa');
});


console.log('I Greeted ^__^');
emitter.emit('greet');