const mysql = require("mysql");
const keys = require('./keys')
const port  = process.env.PORT || 4000;

if(port !== 4000 ) {
  var connection = mysql.createConnection({
    host: keys.sqlHost,
    port: 3306,
    user: "root",
    password: keys.sqlPassword,
    database: "burgers_db"
  });
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: '',
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {throw err;}
  
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;