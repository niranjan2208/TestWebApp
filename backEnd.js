var fs = require('fs');
var jsonfile = require('jsonfile');
var json = require('./data/UserData.json');
var file='data/UserData.json';
var contents=fs.readFileSync('data/data.json');
var jsoncontents=JSON.parse(contents);
var userName=jsoncontents.username;
var password=jsoncontents.password;
// console.log("User Name:", userName);
// console.log("Password:",password);
 var bodyParser     =        require("body-parser");
 
 var express=require('express');
 var app=express();
 var path=require('path');
 var authenticated;
app.use(express.static(__dirname+"\\css"));
app.use(express.static(__dirname+"\\js"));
app.use(express.static(__dirname+"\\lib"));
app.use(express.static(__dirname+"\\fonts"));
app.use(express.static(__dirname+"\\vendor"));
app.use(express.static(__dirname+"\\data"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'html');
 
 app.get('/',function(req,res)
 {
 
 res.sendFile(__dirname+"\\views\\Login1.html");
 }
 );
 
  app.get('/frameRender',function(req,res)
 {

 res.sendFile(__dirname+"\\views\\frameRender.html");
 }
 );
 
 app.post('/login',function(req,res){
  var user_name=req.body.email;
  var passwd=req.body.pass;
  console.log("User name = "+user_name+", password is "+passwd);
  if(user_name===userName && passwd === password)
  {
  	res.setHeader("Content-Type", "text/html");
  	authenticated=true;
		res.sendFile(__dirname+"\\views\\CompleteDetails.html");
  	
  }
 else
 {
 	res.end(false);
 }
  
});


app.post('/register',function(req,res){
  var name=req.body.name;
  var dob=req.body.dob;
  var email_id=req.body.email;
  var addr1=req.body.address1;
  var addr2=req.body.address2;
  var course=req.body.course;
  var state=req.body.stt;
  var city=req.body.city;

  //start writing
		
        json.push({ Name: name , DateOfBirth: dob, EmailID: email_id, AddressLine1:addr1, AddressLine2:addr2, Course:course, State:state, City:city });
        
        jsonfile.writeFileSync(file, json, {spaces:2});
              
        {
        	res.sendFile(__dirname+"\\views\\Summary.html");
        }
  
});
 
app.get('/registration',function (req, res) {
	res.setHeader("Content-Type", "text/html")
		res.sendFile(__dirname+"\\views\\Registration1.html");
	});

var server = app.listen(9090);