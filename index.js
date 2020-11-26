var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var port = 80;

var messages = [];
var prevMessages = messages.length;

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('pages'));

app.get('/test', (req,res) => {
	res.send('hello, your test has worked');

})

app.get('/', (req,res) => {
	res.sendFile(__dirname + "/pages/index.html");
})

var i = 0;

app.post('/post-message', (req,res) =>  {

		res.send(`<h1>${i++}</h1>`);
});

app.listen(port, () => {
	console.log("app running on port:" + port);

})
