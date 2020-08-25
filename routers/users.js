const router = require("express").Router();
const { login } = require("../controllers/users");

router.route("/login/:id").get(login);
module.exports = router;
