const mysql = require("mysql");
const keys = require('./keys')

const connection = mysql.createConnection({
  host: "eat-da-burger.cqpxxyfzqyx0.us-east-2.rds.amazonaws.com",
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