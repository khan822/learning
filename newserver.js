
//server port run
var http = require ('http')
var express = require ("express");
var mysql =require ("mysql");
var bodyParser     =        require("body-parser");
var app = express();
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(4000, ()=>{
console.log("server running on port 4000");
});//server port run ends



//get datas from db and db connection


app.get("/list",(req,res,next)=>{


var con = mysql.createConnection({
host:"192.168.16.246",
user:"allusers",
password:"whdb@123",
database:"imran_learning"

});

con.connect(function(err){
if(err) throw err;
con.query("SELECT * FROM listofstudents", function (err,result,fields){

if (err) throw err;

res.json(result)

console.log(result)

res.end();
con.destroy();
});

});

})

app.post('/login',function(req,res){
	console.log(req);
  var name=req.body.username;
  var password=req.body.password;


    

console.log(name)
var con = mysql.createConnection({
host:"192.168.16.246",
user:"allusers",
password:"whdb@123",
database:"imran_learning"

});

con.connect(function(err){
if(err) throw err;
con.query("SELECT * FROM listofstudents WHERE name='"+name+"'", function (err,result,fields){

if (err) throw err;

res.json(result)

console.log(result)
res.end();
con.destroy();
});

});
});

