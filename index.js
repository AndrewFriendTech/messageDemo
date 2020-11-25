var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var port = 80;

app.use(morgan('combined'));

app.use(bodyParser({extended:false}));
app.use(express.static('pages'));

app.use('/test', (req,res) => {
	res.send('hello, your test has worked');

})

app.listen(port, () => {
	console.log("app running on port:" + port);

})
