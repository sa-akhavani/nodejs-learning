var greet1 = require('./greet1.js');
greet1();

var greet2 = require('./greet2.js').greet;
greet2();

var greet3 = require('./greet3.js');
greet3.greet();
greet3.greeting = 'Sag!';

// The exported object is cached!
var greet3n = require('./greet3.js');
greet3n.greet();


var Greet4 = require('./greet4');
grt4 = new Greet4();
grt4.greet();

var greet5 = require('./greet5.js');
greet5();