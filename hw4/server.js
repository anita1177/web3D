var express = require('express');
var app = express();
var shelljs = require('shelljs');

app.get('/',function(req,res){
	res.sendFile(__dirname + '/hw4.html');
});

app.get('/api',function(req,res){
	var circleX = req.query.circleX;
	var circleY = req.query.circleY;
	var circleR = req.query.circleR;
	var RecPosX = req.query.RecPosX;
	var RecPosY = req.query.RecPosY;
	var	RecWidth = req.query.RecWidth;
	var RecHeight = req.query.RecHeight;
	
	shelljs.exec(`CircleRect.exe ${circleR} ${circleX} ${circleY} ${RecWidth} ${RecHeight} ${RecPosX} ${RecPosY}`,function(status,output){
		var data = {output: output};
		
		res.writeHead(200, {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Content-Type"
		});
		
		res.write(JSON.stringify(data));
		res.end();
	})
	

})

app.listen(1337,function(){
	console.log('listen localhost::1337');
});