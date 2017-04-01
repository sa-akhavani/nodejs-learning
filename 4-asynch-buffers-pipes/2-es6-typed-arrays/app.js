var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);

view[0] = 12;
view[1] = 35;
view[2] = 90;
console.log(view);