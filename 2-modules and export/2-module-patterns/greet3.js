function Greet() {
	this.greeting = 'Hello World!!!';
	this.greet = function() {
		console.log(this.greeting);
	};
};

module.exports = new Greet();