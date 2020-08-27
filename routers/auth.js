const router = require("express").Router();
const {
  login,
  signup,
  logout,
  showlogin,
  showsignup,
} = require("../controllers/auth");

router.route("/sign-up").get(showsignup);
router.route("/login").get(showlogin);
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
module.exports = router;
