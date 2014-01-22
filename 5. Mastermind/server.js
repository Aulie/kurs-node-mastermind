var express = require('express');
var path = require('path');

// lag instans
var app = express();

// definer path til views
app.set('views', path.join(__dirname, 'views'));
// definer at vi bruker jade
app.set('view engine', 'jade');
app.use(express.bodyParser());

// for å serve css
app.use('/public', express.static(__dirname + '/public'));

// et previousGuess kan se slik ut
// {colors: {color0 = 'Red', color1 = 'Green', color2 = 'Blue', color3 = 'Black'}, correctColor: 2, correctPositionAndColor: 1}
var previousGuesses = []; // for å lagre gjetninger etterhvert som de kommer inn
var solution = ['Red', 'Red', 'Blue', 'Green']; // fasit

app.get('/', function(req, res) {
	res.render('mastermind', {guesses: previousGuesses});
});

app.post('/guess', function(req, res) {
	console.log(req.body);
	res.render('mastermind', {guesses: previousGuesses});
});

app.listen(3000);
console.log('Server listening on port 3000');