const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const total = Number(input[0]);
const count = Number(input[1]);

let calculatedTotal = 0;

for (let i = 2; i < 2 + count; i++) {
  const [price, quantity] = input[i].split(" ").map(Number);
  calculatedTotal += price * quantity;
}

console.log(calculatedTotal === total ? "Yes" : "No");
