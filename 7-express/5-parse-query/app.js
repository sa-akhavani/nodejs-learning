var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log(req.url);
    next();
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api/:id', function (req, res) {
    res.render('person', {
        ID: req.params.id
    });
    console.log(req.query.firstName);
});

app.post('/poster', urlencoded, function (req, res) {
    res.render('person', {
        ID: req.params.id
    });
    console.log(req.body.firstName);
});

app.listen(port);