var path = require("path");
require("dotenv").config({ path: path.join(__dirname, "/../.env") });
// var Connection = require("tedious").Connection;

var tedious = require('tedious');

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

  if (err) {
    console.error("ERROR", err);
  } else console.log("successfully connected");
});

function recordVisit(req, res){
  const sessionID = req.sessionId
      , ipAddress = req.connection.remoteAddress
      , connectionTime = new Date().toLocaleString().replace(',','')
      , targetURL = req.get('host') + req.url
      , browser = req.headers['user-agent']
      , browsingResult = ""
      , sqlRecordVisit = 'EXEC [addBasicVisitorData] \''
      + sessionID + '\', \'' + ipAddress + '\', \'' + connectionTime + '\',\' ' + targetURL + '\', \'' + browser  + '\', \'' + browsingResult + '\''
      ,sqlRequest = new tedious.Request(sqlRecordVisit,sqlRequestProcessResult);

    connection.execSql(sqlRequest);
}

function sqlRequestProcessResult(err, rowCount){
  console.log(err);
  console.log(rowCount);
}

module.exports = connection;
module.exports.recordVisit = recordVisit;

