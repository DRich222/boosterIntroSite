var connection = require("../config/database");
var tedious = require("tedious");

var recordVisit = req => {
  const sessionID = req.sessionID,
    ipAddress = req.connection.remoteAddress,
    connectionTime = new Date().toLocaleString().replace(",", ""),
    targetURL = req.get("host") + req.url,
    browser = req.headers["user-agent"],
    browsingResult = "",
    sqlRecordVisit =
      "EXEC [addBasicVisitorData] '" +
      sessionID +
      "', '" +
      ipAddress +
      "', '" +
      connectionTime +
      "',' " +
      targetURL +
      "', '" +
      browser +
      "', '" +
      browsingResult +
      "'",
    sqlRequest = new tedious.Request(sqlRecordVisit, sqlRequestProcessResult);

  connection.execSql(sqlRequest);
};

var sqlRequestProcessResult = (err, rowCount) => {
  console.log(err);
  console.log(rowCount);
};

module.exports = { recordVisit, sqlRequestProcessResult };
