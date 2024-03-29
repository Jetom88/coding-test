const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const changeNumber = (num) => {
  return Number(num.split("").reverse().join(""));
};

const a = changeNumber(input[0]);
const b = changeNumber(input[1]);

console.log(Math.max(a, b));
