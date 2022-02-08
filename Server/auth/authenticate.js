var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/user");
var Student = require("../models/student");

exports.local = passport.use(
  new LocalStrategy({ usernameField: "email" }, User.authenticate())
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports = function authorize(req, res, next) {
  if (!req.user) {
    res.statusCode = 401;
    res.json({ success: false, message: "You are not authenticated!" });
    return;
  } else {
    next();
  }
};

module.exports.checkStudent = (req, res, next) => {
  if (!req.user) {
    res.statusCode = 401;
    res.json({ success: false, message: "You are not authenticated!" });
  } else {
    User.findOne({ _id: req.user._id }, (err, user) => {
      if (err) {
        return next(err);
      } else if (
        user.userRole.some((userrole) => userrole.role === "STUDENT")
      ) {
        return next();
      } else {
        res.send("You are not allowed to perform this operation");
      }
    });
  }
};
exports.checkADMIN = (req, res, next) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err) {
      return next(err);
    } else if (user.userRole.some((userrole) => userrole.role === "ADMIN")) {
      return next();
    } else {
      res.send("You are not allowed to perform this operation");
    }
  });
};
exports.checkGAC = (req, res, next) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err) {
      return next(err);
    } else if (user.userRole.some((userrole) => userrole.role === "GAC")) {
      return next();
    } else {
      res.send("You are not allowed to perform this operation");
    }
  });
};
exports.checkGO = (req, res, next) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err) {
      return next(err);
    } else if (user.userRole.some((userrole) => userrole.role === "GO")) {
      return next();
    } else {
      res.send("You are not allowed to perform this operation");
    }
  });
};
exports.checkSupervisor = (req, res, next) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err) {
      return next(err);
    } else if (
      user.userRole.some((userrole) => userrole.role === "SUPERVISOR")
    ) {
      return next();
    } else {
      res.send("You are not allowed to perform this operation");
    }
  });
};
exports.checkMSCor = (req, res, next) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err) {
      return next(err);
    } else if (user.userRole.some((userrole) => userrole.role === "MSCOR")) {
      return next();
    } else {
      res.send("You are not allowed to perform this operation");
    }
  });
};
exports.checkPHDCOR = (req, res, next) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err) {
      return next(err);
    } else if (user.userRole.some((userrole) => userrole.role === "PHDCOR")) {
      return next();
    } else {
      res.send("You are not allowed to perform this operation");
    }
  });
};
