const express = require("express");
const authController = require("../Controllers/authController");

const router = express.Router();

router.get("/alltoken", authController.allToken);
router.post("/createtoken", authController.addToekn);

module.exports = router;
