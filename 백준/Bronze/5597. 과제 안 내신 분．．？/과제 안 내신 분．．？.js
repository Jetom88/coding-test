const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag)
  .map(Number)
  .sort((a, b) => a - b);

const allStudents = Array.from({ length: 30 }, (_, i) => i + 1);

const noSubmitted = allStudents.filter((student) => !input.includes(student));

console.log(noSubmitted.join(" "));
