const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

let result = "";

for (let i = 1; i < input.length; i++) {
  const value = input[i].split(" ").map(Number);
  result += value[0] + value[1] + "\n";
}

console.log(result);
