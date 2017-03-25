var person = {
	firstName: 'ali',
	lastName: 'akhavani',
	sayHello: function() {
		console.log('Hello ' + this.firstName + ', ' + this.lastName);
	}
}
person.sayHello();

console.log(person['firstName']);