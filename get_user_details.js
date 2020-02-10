var connection = require('./../config');

module.exports.userdetails = function (req, res) {


    var token = req.body.token;
    var role = req.body.role;

//console.log(token);
//console.log(role); 


if(!token && !role){

res.json({
            status: false,
            message: 'send params'
        })

} else if(token == "undefined" && role == "undefined"){

res.json({
            status: false,
            message: 'token && role undefined'
        })
}else{
connection.query("SELECT * FROM user_registeration_form where token = '"+token+"' AND role = '"+role+"' ", function (error, results, fields) {
if (error) throw err;

if(results.length > 0){

  res.json({
            status: true,
            userdetails: results
        });
//console.log(results.length)

}else{

 res.json({
            status: false,
            message: 'Token or role not matching'
        })

}


})
}


}















