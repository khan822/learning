var express = require ('express')
const cors = require('cors')({origin:true});
var bodyParser = require("body-parser");

var app=express();
app.use(bodyParser.json());
app.listen(5000, ()=>{
console.log("server running on port 5000");
});

app.post("/message",(req,res,next)=>{
    cors(req,res,()=>{
    if(req.method != "POST"){
        res.status(400).send('Please send a POST request');
        return;
    }
	res.send(req.body)
}) 
}) 
