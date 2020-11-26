var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var port = 80;

var messages = [];
var prevMessages;

app.use(morgan('combined'));

app.use(bodyParser({extended:false}));
app.use(express.static('pages'));

app.get('/test', (req,res) => {
	res.send('hello, your test has worked');

})

app.get('/', (req,res) => {
	res.sendFile(__dirname + "/pages/index.html");
})

app.listen(port, () => {
	console.log("app running on port:" + port);

})
