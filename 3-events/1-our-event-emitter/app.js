var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('greet', function() {
	console.log('Someone Barked!');
});

emitter.on('greet', function() {
	console.log('YOOhaHa');
});


console.log('I Greeted ^__^');
emitter.emit('greet');