var http =require ('http')
var express = require ('express')
var mysql = require ('mysql')
var bodyparser = require('body-parser');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var con = mysql.createConnection({
host:"192.168.16.246",
user : "allusers",
password :"whdb@123",
database:"imran_learning"

})


con.connect(function(err){

if(!err){
console.log("Database is connected")
}else{
console.log("Error connectiong Database")
}
})

var ip = require("ip");
console.log("====================ip adress======>>>>>>>"+ ip.address() );



app.get('/message', (req, res) => {

 con.query("SELECT * FROM `learning`",function (err,result,fields){
if(err) throw err;
res.json(result)
console.log(result)
res.end();
})

})













app.listen(5000, ()=>{
    console.log("server running on port 5000");
    });


