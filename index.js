var express = require("express");
var createError = require("http-errors");
var path = require("path");
var flash = require("express-flash");
var session = require("express-session");
var mysql = require("mysql");
var connection = require("./lib/db");
var usersRouter = require("./routes/users");
var app = express();

// view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    cookie: { maxAge: 60000 },
    store: new session.MemoryStore(),
    saveUninitialized: true,
    resave: "true",
    secret: "secret",
  })
);

app.use(flash());
app.use("/", usersRouter);

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
