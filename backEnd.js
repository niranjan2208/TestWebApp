var fs = require('fs');
var contents=fs.readFileSync('data.json');
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
 if(authenticated===true)
 res.sendFile(__dirname+"\\views\\frameRender.html");
 else
 return res.redirect('/');
 }
 );
 
 app.post('/backEnd',function(req,res){
  var user_name=req.body.email;
  var passwd=req.body.pass;
  console.log("User name = "+user_name+", password is "+passwd);
  if(user_name===userName && passwd === password)
  {
  	res.setHeader("Content-Type", "text/html");
  	authenticated=true;
		res.sendFile(__dirname+"\\views\\Registration1.html");
  	
  }
  else
  {
   app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message, 
            error: err
        });
     });
  
  }

  
});
 
//app.get('/registration',function (req, res) {
//	res.setHeader("Content-Type", "text/html")
//		res.sendFile(__dirname+"\\views\\Registration1.html");
//	});

var server = app.listen(9090, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

  })