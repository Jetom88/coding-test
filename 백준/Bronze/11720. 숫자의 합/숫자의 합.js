const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

console.log(
  input[1]
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur)
);
