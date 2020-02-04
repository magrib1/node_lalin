var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.30.102.92",
  user: "root",
  password: "lalin",
  database: "db_lalin"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
