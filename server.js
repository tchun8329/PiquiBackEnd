var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.listen(port, function() {
	console.log("Listening on " + port);
});

app.all("/helloWorld",function(req,res)
{
	res.end("Hello World");
});

app.all("/setScore",function(req,res)
{
	var name = req.query.name;
	var score = req.query.score;
	res.end(name + " got score " + score);
});