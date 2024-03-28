const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

for (let i = 1; i < input.length; i++) {
  console.log(input[i][0] + input[i][input[i].length - 1]);
}
