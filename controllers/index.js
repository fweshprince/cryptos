const asyncHandler = require("../middleware/async");
const { cloudinary, upload } = require("../utils/cloudinary");
const Deposit = require("../models/Deposit");
// @desc Render about page
// @access public
exports.about = (req, res, next) => {
  res.render("about-us");
};
// @desc Render user active plans page
// @access private
exports.activePlans = (req, res, next) => {
  res.render("activeplans");
};
// @desc Render payment confirmation page
// @access private
exports.confirmation = (req, res, next) => {
  res.render("confirmation");
};
// @desc Render user dashboard page
// @access private
exports.dashboard = (req, res, next) => {
  res.render("dashboard");
};
// @desc Render invest page
// @access private
exports.invest = (req, res, next) => {
  res.render("invest");
};
// @desc Render make withdrawal page
// @access private
exports.withdraw = (req, res, next) => {
  res.render("withdraw");
};
// @desc Render make deposit page
// @access private
exports.deposit = (req, res, next) => {
  res.render("deposit");
};
// @desc Render contact us page
// @access public
exports.contact = (req, res, next) => {
  res.render("contact");
};
// @desc Render faq page
// @access public
exports.faq = (req, res, next) => {
  res.render("faq");
};
// @desc Render home page
// @access public
exports.index = (req, res, next) => {
  res.render("index");
};
// @desc Render signin page
// @access public
exports.signin = (req, res, next) => {
  res.render("login", { message: "" });
};
// @desc Render rules page
// @access public
exports.rules = (req, res, next) => {
  res.render("rules");
};
// @desc Render signup page
// @access public
exports.signup = (req, res, next) => {
  res.render("sign-up", { message: "" });
};
// @desc User upload deposit proof
// @access public
exports.btcdeposit = asyncHandler(async (req, res, next) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  const obj = {
    ...req.body,
    imagePath: result.secure_url,
    publicId: result.public_id,
  };
});
