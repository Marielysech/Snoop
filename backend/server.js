const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')
const MongoStore = require("connect-mongo");
var createError = require('http-errors');



// config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// const usersRoute = require('./routes/users')
const authRoute = require('./routes/auth');
// const postRoute = require('./routes/posts');


app.use('/', express.static('./public'))
app.use("/auth", authRoute);
// app.use("/users", usersRoute);
// app.use("/posts", postRoute);



// passport configuration
app.use(passport.initialize())

const sessionStore = new MongoStore({
  mongoUrl: process.env.DB_SERVER,
  collection: "sessions",
});

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  unset: "destroy",
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: true,
    secure: true
  },
}))

app.use(passport.session())

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// database connexion
mongoose.connect(process.env.DB_SERVER)
.then(() => console.log("Connected to DB server"))
.catch((err) => console.log(err));


// CORS setup

 app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
  })
);

app.set("trust proxy", 1);


// server setup

const PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.PORTNAME, (err) => {
    if (err) console.log(err);
    console.log(`Express server running on port ${PORT}...`);
  })
  

  module.exports = app;