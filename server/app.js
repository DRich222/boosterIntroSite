var path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./.env") });
var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");
var index = require("./routes/index");
var signup = require("./routes/signup");
var users = require("./routes/users");
var session = require("express-session");

//--------------------------------------------
// Connect to Remote Database
//--------------------------------------------

var database = require("./config/database");

var app = express();

//--------------------------------------------
//  Tedious SQL Procedures for Remote Database
//--------------------------------------------

var procedures = require("./lib/procedures");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//--------------------------------------------
// Implement Sessions
//--------------------------------------------
app.use(
  session({
    secret: process.env.SECRET || "keyboard catty",
    saveUninitialized: true,
    resave: true,
    cookie: { secure: false }
  })
);

//--------------------------------------------
// Middleware to Track Visitors
//--------------------------------------------

app.use(async (req, res, next) => {
  console.log("recording a visit");
  procedures.recordVisit(req);
  next();
});

//--------------------------------------------
// Set static assets to the Production React Build
//--------------------------------------------

app.use(express.static(path.join(__dirname, "../client/build")));

//--------------------------------------------
// Attach Route Handlers
//--------------------------------------------

app.use("/signup", signup);
app.use("/", index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
  next(req, res);
});

module.exports = app;
