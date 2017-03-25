// Basic Function
function helloWorld() {
	console.log("Hello Ali!");
}
helloWorld();

// Functions are first class
function sayHello(fn) {
	fn();
}
sayHello(helloWorld);

// Function Expression
var helloWorld = function() {
	console.log("Hi Ali!");
}
helloWorld();

// Function Expression in-line
sayHello(function() {
	console.log("Hello Dude!");
})