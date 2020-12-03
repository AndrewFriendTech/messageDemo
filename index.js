var express = require('express');
var morgan = require('morgan');

var app = express();
var port = 80;

var messages = [];
var prevMessages = messages.length;
var currentId = 0;

//app.use(morgan('combined'));

// app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static('pages'));

app.get('/test', (req,res) => {
	res.send('hello, your test has worked');

})

app.get('/', (req,res) => {
	res.sendFile(__dirname + "/pages/index.html");
})

app.post('/poll-messages',(req,res) =>
{
	console.log(messages)
	res.set('Content-Type', 'text/json');
	console.log(req.body)
	res.send(messages.slice(req.body.from + 1));
	
})

app.post('/post-message', (req,res) =>  {

		var msg = req.body;
		msg.id = currentId++;
		messages.push(msg);
		console.log(messages);
		res.send();
});

app.listen(port, () => {
	console.log("app running on port:" + port);

})

function validateMessage()
{

}