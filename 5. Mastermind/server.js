var express = require('express');
var path = require('path');
var connect = require('connect');

// lag instans
var app = express();

// definer path til views
app.set('views', path.join(__dirname, 'views'));
// definer at vi bruker jade
app.set('view engine', 'jade');

app.use(connect.urlencoded())
app.use(connect.json())

// for å serve css
app.use('/public', express.static(__dirname + '/public'));

var previousGuesses = []; // for å lagre gjetninger etterhvert som de kommer inn
var solution = ['Red', 'Red', 'Blue', 'Green']; // fasit

app.get('/', function(req, res) {
	res.render('mastermind', {guesses: previousGuesses});
});

app.post('/guess', function(req, res) {
	console.log(req.body);
	saveGuess(req.body);
	res.render('mastermind', {guesses: previousGuesses});
});

var saveGuess = function(colorsGuessed) {
	previousGuesses.push({colors: colorsGuessed, correctColor: 0, correctPositionAndColor: 0});
}

//app.get('/startover', function(req, res) {
//  previousGuesses = [];
//  res.render('mastermind', {guesses: previousGuesses});
//});

app.listen(3000);
console.log('Server listening on port 3000');