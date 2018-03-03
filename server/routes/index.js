var express = require("express");
var router = express.Router();
const db = require("./../config/database")

/* GET home page. */
router.get("/", function(req, res, next) {
  res.sendFile("/client/build/index.html", { root: "../../" });
});

module.exports = router;
