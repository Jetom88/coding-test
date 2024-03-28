const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const scores = input[1].split(" ").map(Number);
const bestScore = Math.max(...scores);
const sumOfAdjustedScores = scores
  .map((score) => (score / bestScore) * 100)
  .reduce((acc, cur) => acc + cur);

console.log(sumOfAdjustedScores / Number(input[0]));
