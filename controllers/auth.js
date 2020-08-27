const User = require("../models/User");
const asyncHandler = require("../middleware/async");
const passport = require("passport");
// const ErrorResponse = require("../utils/ErrorResponse");

// @desc Logs a user in
// @access public
exports.login = asyncHandler(async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: false,
  })(req, res, next);
});
// @desc Renders login page
// @access public
exports.showlogin = asyncHandler(async (req, res, next) => {
  res.render("login", { message: "" });
});
// @desc Renders signup page
// @access public
exports.showsignup = asyncHandler(async (req, res, next) => {
  res.render("sign-up", { message: "" });
});

// @desc Registers a user
// @access public
exports.signup = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, username } = req.body;
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    username,
  });
  req.login(user, function (err) {
    if (err) {
      return res.render("sign-up", { message: "" });
    }
    return res.redirect("/dashboard");
  });
});

// @desc Logs a user out
// @access public
exports.logout = asyncHandler(async (req, res, next) => {
  req.logout();
  res.redirect("login");
});
