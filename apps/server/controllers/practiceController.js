const fs = require("fs");
const path = require("path");

const { getElapsedTime } = require("../utilities/serverUtils");
const { writeToFileUtil } = require("../utilities/writeToFile");

const filePath = path.resolve(__dirname, "../data/interviewPracticeList.json");

exports.getPracticeList = (req, res) => {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);
    const { tab: currentTab } = req.body;

    const todo = data[currentTab].todo || {};

    const completed = data[currentTab].completed || {};
    for (const key in completed) {
      if (completed[key].timeStamp) {
        completed[key].lastTried = getElapsedTime(completed[key].timeStamp);
      }
    }

    writeToFileUtil(data, "../data/interviewPracticeList.json");
    res.status(200).json({ data });
  } catch (err) {
    console.error("Failed to read or process practice list:", err);
    res.status(500).json({ error: "Failed to load data." });
  }
};

exports.updatePracticeList = (req, res) => {
  try {
    const { category, source, destination, item } = req.body;
    const list = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const sourceBucket = list[category]?.[source];
    const destinationBucket = list[category]?.[destination];
    console.log(
      "sourceBucket",
      sourceBucket,
      "--------------------------------------------------------------------------",
      "item",
      item,
      "--------------------------------------------------------------------------",
      "sourceBucket[item]",
      sourceBucket[item],
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
      item in sourceBucket
    );
    if (!sourceBucket || !destinationBucket || !sourceBucket[item]) {
      return res.status(404).json({ message: "Invalid update request." });
    }

    destinationBucket[item] = sourceBucket[item];
    delete sourceBucket[item];

    if (destination === "completed") {
      destinationBucket[item].timeStamp = new Date();
      destinationBucket[item].lastTried = "0";
      destinationBucket[item].attempt =
        (destinationBucket[item].attempt || 0) + 1;
    }

    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), "utf8");

    res.json({
      message: `Moved '${item}' from '${source}' to '${destination}'.`,
      categoryData: list[category],
    });
  } catch (err) {
    console.error("Update failed:", err);
    res.status(500).json({ error: "Failed to update practice list." });
  }
};

exports.addPracticeProblem = (req, res) => {
  try {
    const { name, details, tags, category, target } = req.body;
    // console.log("addPracticeProblem req.body---->", req.body);
    const problemList = JSON.parse(fs.readFileSync(filePath, "utf8"));
    // console.log("problemList", problemList);
    if (
      !problemList ||
      !problemList[category] ||
      !problemList[category][target]
    ) {
      return res.status(400).json({ message: "Invalid add request." });
    }
    const targetList = problemList[category]?.[target];
    // console.log("targetList", targetList);
    problemList[category].total = problemList[category].total + 1;

    const newProblem = {};
    newProblem.name = name;
    newProblem.details = details;
    newProblem.tags = tags;
    newProblem.slNo = problemList[category].total;
    // Add to the list
    targetList[name] = newProblem;
    // update the total value

    fs.writeFileSync(filePath, JSON.stringify(problemList, null, 2), "utf8");
    // console.log("new Problem", newProblem);
    res.json({
      message: `Added new item to ${target} of ${category}.`,
      problem: newProblem,
    });
  } catch (err) {
    console.log("Error on adding new problem", err);
  }
};
