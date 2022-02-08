const express = require("express");
const mongoose = require("mongoose");
const connection = require("./config/connection");
const userRouter = require("./routes/users");
const studentRouter = require("./routes/students");
const authRouter = require("./routes/auth");
var session = require("express-session");
var FileStore = require("session-file-store")(session);
var passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var authorize = require("./auth/authenticate");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

connection(); //establishing database connection

app.use(
  session({
    name: "session-id",
    secret: "12345-67890-09876-54321",
    saveUninitialized: false,
    resave: false,
    store: new FileStore(),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/students", studentRouter);

//Server listening
app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});