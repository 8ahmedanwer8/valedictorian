const express = require("express");
const router = express.Router();
const { registerUser, authUser } = require("../controllers/userControllers");

let User = require("../models/userModel");

router.route("/").post(registerUser);
router.route("/login").post(authUser);

module.exports = router;
