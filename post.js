/* var http = require ('http')
var express = require ("express");
var mysql =require ("mysql");
var bodyParser=require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(4000, ()=>{
console.log("server running on port 4000");
});


app.post("/newlist",(req,res,next)=>{

var con = mysql.createConnection({
host:"192.168.16.246",
user:"allusers",
password:"whdb@123",
database:"imran_learning"

})

con.connect(function(err){
if(err) throw err;
  var users={
        "firstname":req.body.firstname,
        "lastname":req.body.lastname,
        "password":req.body.password,
        "username":req.body.username,
}
console.log(users);
    connection.query('INSERT INTO users SET ?',users, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  })
});
 */