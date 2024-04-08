const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const findChessPiece = input[0].split(" ").map(Number);
const flagChessPiece = [1, 1, 2, 2, 2, 8];
const result = [];

for (let i = 0; i < findChessPiece.length; i++) {
  result.push(flagChessPiece[i] - findChessPiece[i]);
}

console.log(result.join(" "));
