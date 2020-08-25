const User = require("../models/User");
// const ErrorResponse = require("../utils/ErrorResponse");

// @desc Logs a user in
// @access public
exports.login = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(
        new ErrorResponse(`No user found with ID of ${req.params.id}`, 404)
      );
    }
    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};
// @desc Registers a user
// @access public
exports.signup = async (req, res, next) => {};
