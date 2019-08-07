var fs = require('fs');
var contents=fs.readFileSync('data.json');
var jsoncontents=JSON.parse(contents);
var userName=jsoncontents.username;
var password=jsoncontents.password;
 console.log("User Name:", userName);
 console.log("Password:",password);
 var bodyParser     =        require("body-parser");
 
 var express=require('express');
 var app=express();
 var path=require('path');
app.use(express.static(__dirname+"\\css"));
app.use(express.static(__dirname+"\\js"));
app.use(express.static(__dirname+"\\lib"));
//app.use(express.static(__dirname+"\\views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'html');
 
 app.get('/',function(req,res)
 {
 
 res.sendFile(__dirname+"\\views\\login.html");
// 	res.send('Hello World!');
 }
 );
 
 app.post('/backEnd',function(req,res){
  var user_name=req.body.id;
  var passwd=req.body.pwd;
  console.log("User name = "+user_name+", password is "+password);
  if(user_name===userName && passwd === password)
  {
  	res.send(true);
  	
  }
  else
  {
  res.send(false);
  res.end("failure")}

  
});
 
app.get('/registration',function (req, res) {
	res.setHeader("Content-Type", "text/html")
		res.sendFile(__dirname+"\\views\\registration.html");
	});

var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

  })