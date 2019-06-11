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
app.post("/messages",(req,res,next)=>{
  var con = mysql.createConnection({
    host:"192.168.16.246",
    user:"allusers",
    password:"whdb@123",
    database:"imran_learning"
     })


con.connect(function(err){

if(err) throw err;

 var messages = new Messages(req.body);
var username=username(req.body);
console.log("variable===========>>>>>>"+ messages +"============= "+ username);

//con.query("UPDATE `employee` SET messages = messages WHERE username =username",function (err,result,fields){
con.query("UPDATE `employee` SET (`messages`, `username`) WHERE ('"+req.body.messages+"','"+req.body.username+"'")"
{

function (err,result,fields){
  message.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
res.send(result)


})

})
})*/




app.post("/messages",(req,res,next)=>{
  var con = mysql.createConnection({
    host:"192.168.16.246",
    user:"allusers",
    password:"whdb@123",
    database:"imran_learning"
     })
res.statusCode = 200;
res.send(req.body)

/*
   con.connect(function(err){
        

        con.query("UPDATE `employee` SET (`messages`, `username`) WHERE ('"+req.body.messages+"','"+req.body.username+"')", 


        function (err, result) {
            if (err) {

                res.statusCode = 503;
                res.send({
			 
                    result: 'not updated',
            
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
*/

})












/*
app.post('/messages', (req, res) => {

  var con = mysql.createConnection({
    host:"192.168.16.246",
    user:"allusers",
    password:"whdb@123",
    database:"imran_learning"
     })


  var message = new Message(req.body);
var username=username(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
res.send(result)
  })
})*/











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
 
    
