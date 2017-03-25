var person = {
	name: 'Ali Akhavani',
	greet: function(data1, data2) {
		console.log('Hello ' + this.name + ': ' + data1 + ' ' + data2);
	}
}

person.greet('123', '456');

person.greet.call({name: 'John Doe'}, '256', '456');
person.greet.apply({name: 'Sag Pir'}, ['256', '456']);