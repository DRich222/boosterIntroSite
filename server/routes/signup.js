var express = require("express");
var router = express.Router();
var recordEmail = require("../lib/procedures").recordEmail;

router.post("/", function(req, res, next) {
  recordEmail(req.body.email);
  res.end();
});

module.exports = router;
