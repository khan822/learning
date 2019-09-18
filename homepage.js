var http = require('http')
var express = require("express")
var mysql = require('mysql')
var fs = require('fs')
var bodyParser = require("body-parser");
var app = express();
var Buffer = require('buffer/').Buffer




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var con = mysql.createConnection({
    host: "192.168.16.246",
    user: "allusers",
    password: "whdb@123",
    database: "imran_learning"

})

/*Global connection*/
con.connect(function (err) {

    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }

})

//note:insert new user record


app.post('/insert_user_record', (req, res, next) => {
    var username = req.body.username;
    var userimage = req.body.userimage;
    var sql = "INSERT INTO homepagedetails (name,image) VALUES ('" + username + "','" + userimage + "')";

    con.query(sql, function (err, result) {

        if (err) {
            result.json("error")
        } else {
            res.send(result );
            
        }







/* 

   
        if (err) {
           // throw err
           result.json("error")
        }
        else if (result == null) {
            result.json("result is null")

        } else if (result === undefined || result.length == 0) {

            result.json("result is empty or does not exist")
        } else {
            //res.status(500).send();
            res.send("imrankhna---" + result)
        } */

    });


});//End class




app.post('/selectimage', function (req, res) {

    var sql = con.query("SELECT * FROM homepagedetails", function (err, result, fields) {
        if (err) throw err;
        try {

          res.json({ result });
	console.log(result);

            var resultempty = res.json({ result });


		//console.log(resultempty);


            if (resultempty == null) {
                result.json("result is null")

            }else if (resultempty===undefined || resultempty.length ==0){

                result.json("result is empty or does not exist")
            }
        } catch (err) {

            res.status(500).send();
        }



    });

});//End class










app.listen(8000, () => {
    console.log("server running on port 8000");
});
