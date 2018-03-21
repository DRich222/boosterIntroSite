var path = require("path");
require("dotenv").config({ path: path.join(__dirname, "/../.env") });
// var Connection = require("tedious").Connection;

var tedious = require("tedious");

var config = {
  server: process.env.SERVER,
  userName: process.env.USERNAME1,
  password: process.env.PASSWORD,
  options: {
    database: process.env.DATABASE
  }
};


var connection = new tedious.Connection(config);

connection.on("connect", function(err) {
  console.log(config);
  if (err) {
    console.error("ERROR", err);
  } else console.log("successfully connected");
});

module.exports = connection;
