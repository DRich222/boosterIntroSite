var express = require("express");
var router = express.Router();

router.post("/", function(req, res, next) {
  console.log("attempted signup");
  console.log("req.body is ", req.body);
  res.end();
});

module.exports = router;
