var http = require ('http')
var express = require ("express")
var mysql = require ('mysql')
var bodyParser = require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(8000, ()=>{
    console.log("server running on port 8000");
    });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post("/ionic2",(req,res,next)=>{

    var con = mysql.createConnection({
    host:"192.168.16.246",
    user:"allusers",
    password:"whdb@123",
    database:"imran_learning"
     })

     con.connect(function(err){
        
        /* if(err) throw err;*/

        con.query("INSERT INTO `employee`(`firstname`, `lastname`, `username`) VALUES ('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.username+"')", 

        
        function (err, result) {
            if (err) {
              //  console.error('CONNECTION error: ',err);
                res.statusCode = 503;
                res.send({
                    result: 'duplicate entry error',
                    //err: err.code
                });
            }else {
                res.send({
                     result:"successfully inserted"
             });
                console.log(result)       
            }
        
           con.destroy(); 

        }) 
     })
 
})    







app.post("/select",(req,res,next)=>{
  var con = mysql.createConnection({
    host:"192.168.16.246",
    user:"allusers",
    password:"whdb@123",
    database:"imran_learning"
     })


con.connect(function(err){

if(err) throw err;
con.query("SELECT * FROM `employee`",function (err,result,fields){

if(err) throw err;
res.json(result)
console.log(result)
res.end();


})

})
})

/*

app.post("/delete",(req,res,next)=>{

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM `employee` WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});


})

*/

















// DELETE USER
app.delete('/delete/(:id)', function(req, res, next) {
    var user = { id: req.params.id }
    
    req.getConnection(function(error, conn) {
        conn.query('DELETE FROM `employee` WHERE id = ' + req.params.id, user, function(err, result) {
            //if(err) throw err
            if (err) {
                req.flash('error', err)
                // redirect to users list page
                res.redirect('/select')
            } else {
                req.flash('success', 'User deleted successfully! id = ' + req.params.id)
                // redirect to users list page
                res.redirect('/select')
            }
        })
    })
})
 
    
