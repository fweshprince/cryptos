const router = require("express").Router();
const {
  about,
  activePlans,
  confirmation,
  contact,
  dashboard,
  faq,
  index,
  invest,
  signin,
  signup,
  rules,
  withdraw,
} = require("../controllers/index");

router.route("/about-us").get(about);
router.route("/activePlans").get(activePlans);
router.route("/confirmation").get(confirmation);
router.route("/contact").get(contact);
router.route("/dashboard").get(dashboard);
router.route("/faq").get(faq);
router.route("/").get(index);
router.route("/index").get(index);
router.route("/invest").get(invest);
router.route("/login").get(signin);
router.route("/rules").get(rules);
router.route("/sign-up").get(signup);
router.route("/withdraw").get(withdraw);

module.exports = router;
