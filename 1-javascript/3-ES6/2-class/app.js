'use strict';

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log('Hello! ' + this.firstName + ' ' + this.lastName);
    }
}

var ali = new Person('Ali', 'Akhavani');
ali.greet();

var gholi = new Person('Gholi', 'Ebrahimi');
gholi.greet();

console.log(ali.__proto__);