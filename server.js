var http = require('http');
//var url= require('/home/node/server.js')
//var url = require('url');
var fs = require('fs');
var express = require("express");
var mysql = require('mysql');
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
app

app.get("/", (req, res, next) => {
 fs.readFile('sample.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

app.get("/employe", (req, res, next) => {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write("<h1>satheesh</h1>");
res.end();
})

app.get("/http", (req, res, next) => {
res.json(["Tony","Lisa","Michael","Ginger","Food"]);
res.end();
})

app.get("/mysqlget",(req, res, next) => {


var con = mysql.createConnection({
  host: "192.168.16.246",
  user: "allusers",
  password: "whdb@123",
  database: "imran_learning"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM employeedetails", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
	res.json(result);
res.end();
con.destroy();
  });
});



})



app.get("/newget",(req, res, next) => {


var con = mysql.createConnection({
  host: "192.168.16.246",
  user: "allusers",
  password: "whdb@123",
  database: "imran_learning"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM listofstudents", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
	res.json(result);
res.end();
con.destroy();
  });
});





})











//res.end(req.url);
//console.log(req.url)







