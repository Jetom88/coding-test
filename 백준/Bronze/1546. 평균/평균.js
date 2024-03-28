const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const score = input[1].split(" ").map(Number);
const bestScore = Math.max(...score);
const average = score
  .map((score) => (score / bestScore) * 100)
  .reduce((acc, cur) => acc + cur);

console.log(average / Number(input[0]));
