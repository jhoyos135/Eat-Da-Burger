const mysql = require("mysql");
const keys = require('./keys');

  var connection = mysql.createConnection({
    host: keys.sqlHost,
    port: 3306,
    user: "root",
    password: keys.sqlPassword,
    database: "burgers_db"
  });




connection.connect(function(err) {
  if (err) {throw err;}
  
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;