const express = require("express");
const {
  getPracticeList,
  updatePracticeList,
  addPracticeProblem,
} = require("../controllers/practiceController");
const router = express.Router();

router.post("/", getPracticeList);
router.patch("/", updatePracticeList);
//addPracticeProblem
router.post("/add", addPracticeProblem);

module.exports = router;
