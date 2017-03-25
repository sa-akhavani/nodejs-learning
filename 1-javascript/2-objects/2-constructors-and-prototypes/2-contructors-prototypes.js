var Person = function(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
};
Person.prototype.greet = function() {
	console.log('Hello: ' + this.firstName + ' ' + this.lastName);
};

var ali = new Person('Ali', 'Akhavani');
var jalal = new Person('Jalal', 'Mombeinin');
ali.greet();
jalal.greet();

console.log(ali.__proto__);
console.log(jalal.__proto__);