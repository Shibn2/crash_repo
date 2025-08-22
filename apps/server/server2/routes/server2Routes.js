const express = require("express");
const {
  userMe,
  login,
  systemStatus,
  signup,
} = require("../controllers/accountControllers");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/user/me", authenticate, userMe);

router.post("/login", login);

router.post("/signup", signup);

router.get("/system-status", systemStatus);

module.exports = router;
