var path = require("path");
require("dotenv").config({ path: path.join(__dirname, "/../.env") });
var Connection = require("tedious").Connection;
var config = {
  server: process.env.SERVER,
  userName: process.env.USERNAME,
  password: process.env.PASSWORD,
  options: {
    database: process.env.DATABASE
  }
};
var connection = new Connection(config);

connection.on("connect", function(err) {
  if (err) {
    console.error("ERROR", err);
  } else console.log("successfully connected");
});

module.exports = connection;
