const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const splitNum = input.slice(1).map((str) => str.split(",").map(Number));

for (let i = 0; i < splitNum.length; i++) {
  const [first, second] = splitNum[i];

  console.log(first + second);
}
