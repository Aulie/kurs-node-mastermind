var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	var listOfNames = ['Trude', 'Magnus', 'Per', 'Pål'];
	res.render('hello', {names: listOfNames});
});

app.listen(3000);
console.log('Server listening on port 3000');