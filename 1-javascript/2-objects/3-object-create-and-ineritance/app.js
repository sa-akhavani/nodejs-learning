var person = {
	firstname: '',
	lastname: '',
	greet: function() {
		console.log(this.firstname + ' ' + this.lastname);
	}
};

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
john.greet();


var ali = Object.create(person);
ali.firstname = 'Ali';
ali.lastname = 'Akhavani';
ali.greet();