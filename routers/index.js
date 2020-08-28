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
  deposit,
} = require("../controllers/index");
const cloudinary = require("cloudinary");
const multer = require("multer");
const Deposit = require("../models/Deposit");
require("dotenv").config();

var storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
var imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter });

cloudinary.config({
  cloud_name: "avwunufe",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route("/").get(index);
router.route("/index").get(index);
router.route("/about-us").get(about);
router.route("/activePlans").get(activePlans);
router.route("/confirmation").get(confirmation);
router.route("/contact").get(contact);
router.route("/deposit").get(deposit);
router.route("/dashboard").get(dashboard);
router.route("/faq").get(faq);
router.route("/invest").get(invest);
router.route("/login").get(signin);
router.route("/rules").get(rules);
router.route("/sign-up").get(signup);
router.route("/withdraw").get(withdraw);
router.post("/deposit", upload.single("image"), async (req, res, next) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  const obj = {
    ...req.body,
    imagePath: result.secure_url,
    publicId: result.public_id,
  };
  await Deposit.create(obj);
  return res.redirect("/dashboard");
});

module.exports = router;
