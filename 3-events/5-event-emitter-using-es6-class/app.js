'use strict';
var Greetr = require('./greeter.js');

var greet1 = new Greetr();
greet1.on('greet', function (data) {
    console.log('Someone Greeted: ' + data);
})

greet1.greet('Ali');