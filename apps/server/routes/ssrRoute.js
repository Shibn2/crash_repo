const express = require("express");
const { ssrRender } = require("../controllers/ssrController");
const router = express.Router();

router.get("/", ssrRender);

module.exports = router;
