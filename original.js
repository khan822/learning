var http = require ('http')
var express = require ("express")
var mysql = require ('mysql')
var bodyParser = require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res){

    //res.setHeader("Access-Control-Allow-Origin", "*");

 });

var con = mysql.createConnection({
    host:"192.168.16.246",
    user:"allusers",
    password:"whdb@123",
    database:"imran_learning"
})

app.post("/insert", (req,res)=>{
console.log(1111111111111111111111111111111)
	/*var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var username = req.body.username;
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  var sql = "INSERT INTO employee (firstname, lastname, username) VALUES ('"+firstname+"', '"+lastname+"', '"+username+"')";
	  con.query(sql, function (err, result) {
	    if (err) throw err;
	    console.log("1 record inserted");
	  });
	});*/
})

app.listen(9000, ()=>{
    console.log("server running on port 9000");
});


