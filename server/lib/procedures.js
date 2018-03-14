var connection = require("../config/database");
var tedious = require("tedious");

//--------------------------------------------
// Procedure to Track Visitors
//--------------------------------------------

async function recordVisit(req) {
  const sessionID = req.sessionID,
    ipAddress = req.connection.remoteAddress,
    connectionTime = new Date().toLocaleString().replace(",", ""),
    targetURL = req.get("host") + req.url,
    browser = req.headers["user-agent"],
    browsingResult = "",
    sqlRecordVisit = `EXEC [addBasicVisitorData] '${sessionID}', '${ipAddress}', '${connectionTime}', '${targetURL}', '${browser}'`;

  //------------------------------------------------------------
  // Promise that Resolves on successful tedious Request
  //------------------------------------------------------------

  //Tedious does not allow concurrent database calls.
  //Since the tracking middleware is used for every server visit, we have to make
  //sure that the tracking remote database call has finished before the server
  //executes any further remote database calls. The simplest way is to use async/await
  //to block any more server actions before the tracking database call has finished.

  const execSql = new Promise((resolve, reject) => {
    const sqlRequest = new tedious.Request(sqlRecordVisit, (err, rowCount) => {
      if (err) {
        console.log("there's an error");
        reject(err);
      } else {
        console.log("successfully implemented promise");
        resolve(rowCount);
      }
    });
  });

  //Execute Promise with async/await
  try {
    //console.log the rows affected (should be 1)
    console.log(await execSql);
  } catch (e) {
    console.error(e);
  }
}

function sqlRequestProcessResult(err, rowCount) {
  console.log(err);
  console.log(rowCount);
}

//--------------------------------------------
// Procedure to Record an Email Address
//--------------------------------------------

function recordEmail(req) {
  const email = req.body.email,
    ipAddress = req.connection.remoteAddress,
    sqlRecordEmail = `EXEC [addEmailSubmission] '${email}', '${ipAddress}'`;

  const sqlRequest = new tedious.Request(
    sqlRecordEmail,
    sqlRequestProcessResult
  );

  console.log("Should have recorded an email");
  connection.execSql(sqlRequest);
}

module.exports = { recordVisit, sqlRequestProcessResult, recordEmail };
