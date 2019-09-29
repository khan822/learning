var http = require ('http')
var express = require ("express")
var mysql = require ('mysql')
var bodyParser = require("body-parser");
var app=express();





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"bw"

})




/*Global connection*/
 con.connect(function(err){

 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }

})






app.post('/insert_user_record', (req, res, next) => {
    var title = req.body.title;
    console.log(title);
    var description = req.body.description;
    var image = req.body.image;
    var sql = "INSERT INTO dashboard (title,description,image) VALUES ('" + title + "', '"+description+"','" + image + "')";

    con.query(sql, function (err, result) {

        if (err) {
            result.json("error")
        } else {
            res.send(result );
            //console.log(result);
            
        }

    });


});//End class












app.listen(9000, ()=>{
    console.log("server running on port 9000");
    });
