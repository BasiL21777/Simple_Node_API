const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, "courses.json"); // looks for courses.json in /data

function readCourses() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.log("Error:", err);
    return [];
  }
}

function writeCourses(courses) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(courses, null, 2), 'utf-8');
    console.log("File written successfully");
  } catch (err) {
    console.log("Error:", err);
  }
}

module.exports = { readCourses, writeCourses };
