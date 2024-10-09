const express = require("express");
const { signup } = require("../controllers/userController");

const router = express.Router();

// Signup route
router.post("/", signup);

module.exports = router;
