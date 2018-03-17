const express = require("express");
const db = require("../config/database");
const router = express.Router();

router.post("/",(req, res, next)=>{
    console.log("email submitted");
    console.log("req.body = ", req.body);

    db.recordEmail(req.email, req.connection.remoteAddress);

    res.end();
});

module.exports = router;
