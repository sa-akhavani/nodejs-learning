function greet(callback) {
    console.log('Hello World!');
    var person = {
        name: 'Ali akhavani'
    };
    callback(person);
};

greet(function (data) {
    console.log('callback invoked!');
    console.log(data);
});