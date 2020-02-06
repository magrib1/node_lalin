const mysql = require('mysql');

var con = mysql.createPool({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "bdf852b8858eb1",
  password: "d550138c",
  database: "heroku_d2bc8e8380b04f5"
});

// con.connect(function (err){
//     if(err) throw err;
// });

module.exports = con;
