var http = require ('http')
var express = require ("express")
var mysql = require ('mysql')
var bodyParser = require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(9000, ()=>{
    console.log("server running on port 9000");
    });

// https://www.nexmo.com/blog/2016/10/19/how-to-send-sms-messages-with-node-js-and-express-dr/

