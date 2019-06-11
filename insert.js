var http = require ('http')
var express = require ("express")
var mysql = require ('mysql')
var bodyParser = require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(8080, ()=>{
    console.log("server running on port 8080");
    });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var con = mysql.createConnection({
    host:"192.168.16.246",
    user:"allusers",
    password:"whdb@123",
    database:"imran_learning"

})
 con.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
 });

 app.get("/select",function(req,res,next){

//if(err) throw err;
con.query("SELECT * FROM employee",function (err,result,fields){

//if(err) throw err;
res.json(result)
console.log(result)
res.end();
con.end
   
   });
 });








