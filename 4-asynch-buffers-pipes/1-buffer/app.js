var buff = new Buffer('Hello', 'utf-8');
console.log(buff);
console.log(buff.toString());
console.log(buff.toJSON());

buff.write('sag');
console.log(buff.toString());