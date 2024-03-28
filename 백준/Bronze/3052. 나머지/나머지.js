const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag)
  .map(Number);

let result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] % 42 !== (input[i] + 1) % 42) {
    result.push((input[i] + 1) % 42);
  }
}

console.log(new Set(result).size);
