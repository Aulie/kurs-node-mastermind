var express = require('express');
var path = require('path');

// lag instans
var app = express();

// definer path til views
app.set('views', path.join(__dirname, 'views'));
// definer at vi bruker jade
app.set('view engine', 'jade');
app.use(express.bodyParser());
//app.use('/public', express.static(__dirname + '/public'));


var guesses = []
var fasit = ['Red', 'Red', 'Blue', 'Green'];

app.get('/', function(req, res) {
	res.render('mastermind', {title: 'Mastermind', guesses: guesses});
});

app.post('/guess', function(req, res) {
	//checkForCorrectColors(req.body);
	res.render('mastermind', {title: 'Mastermind', guesses: guesses});
});

app.get('/startover', function(req, res) {
  guesses = [];
  res.render('mastermind', {title: 'Mastermind', guesses: guesses});
});

app.listen(3000);
console.log('Server listening on port 3000');