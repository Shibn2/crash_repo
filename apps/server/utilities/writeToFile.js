const path = require("path");
const fs = require("fs");

function writeToFileUtil(content, filePath) {
  // Write the file
  const completeFilePath = path.resolve(__dirname, filePath);

  try {
    const res = fs.writeFileSync(
      completeFilePath,
      JSON.stringify(content, null, 2),
      "utf8"
    );
    return true;
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

module.exports = { writeToFileUtil };
