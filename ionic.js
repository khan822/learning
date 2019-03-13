 var http = require ('http')
var express = require ('express')
var mysql = require ('mysql')
var uint8 = require('uint8')
//var cors = require('cors')({origin:true})

var bodyParser = require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(5000, ()=>{
console.log("server running on port 5000");
});

app.post("/addemployee",(req,res,next)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});
   // res.writeHead(200, {'Content-Type': 'application/json'});
    var con = mysql.createConnection({
        host:"192.168.16.246",
        user:"allusers",
        password:"whdb@123",
        database:"imran_learning"
        
        })
        con.connect(function(err){
            if (err) throw err;
	
 /*  if(req.methon != 'POST'){
res.status(400).send('Please send a POST request');
} */

            con.query("INSERT INTO `employee`(`firstname`, `lastname`, `username`) VALUES ('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.username+"')", function (err, result) {

                if (err) throw err;
                //res.json(result)
                console.log(result)
                if(result){
                     res.end({result:'sucess'}) 
                   /* res.end() */
                }
               
            })
 

        })        
 


}) 
/* app.delete('/delete/(:id)', function(req, res, next) {
    var employee = { id: req.params.id }
    
    req.getConnection(function(error, conn) {
        con.query('DELETE FROM `employee` WHERE id = ' + req.params.id, employee, function(err, result) {
          
            if (err) {
                req.flash('error', err)
               
                res.redirect('/users')
            } else {
                req.flash('success', 'employee deleted successfully! id = ' + req.params.id)
               
                res.redirect('/employee')
            }
        })
    })
}) */
 

/* 
var http = require ('http')
var express = require ('express')
var mysql = require ('mysql')

var bodyParser = require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(6000, ()=>{
console.log("server running on port 6000");
});


app.post("/addemploy",(req,res,next)=>{


    var con = mysql.createConnection({
        host:"192.168.16.246",
        user:"allusers",
        password:"whdb@123",
        database:"imran_learning"
        
        })

        con.connect(function(err){
            if (err) throw err;

            con.query("INSERT INTO `employee`(`firstname`, `lastname`, `username`) VALUES ('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.username+"')", function (err, result) {

                if (err) throw err;
                //res.json(result)
                console.log(result)
                if(result){
                    res.end({result:'sucess'})
                   
                }
               
            })
})
}) */