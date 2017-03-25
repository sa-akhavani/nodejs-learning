var util = require('util');

function Person() {
    this.firstname = 'Ali';
    this.lastname = 'Akhavani';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
};

function PoliceOfficer() {
    Person.call(this);
    this.id = '12345';
};

util.inherits(PoliceOfficer, Person);

var police1 = new PoliceOfficer();

police1.greet();
console.log(police1.firstname + ' ' + police1.lastname + ' ' + police1.id);
