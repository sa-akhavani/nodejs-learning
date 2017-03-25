// Pass by value
function change(d) {
	d = 10;
}

var a = 2;
change(a);
console.log(a);

// Pass by Refference
function changeObject(d) {
	d.name = 'sag';
	d.greet = function() {};
}

myObj = {name: 'ali'};
changeObject(myObj);
console.log(myObj);