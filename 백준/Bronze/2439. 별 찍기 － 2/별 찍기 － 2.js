const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

let result = "";
let empty = "";

for (let i = 1; i <= Number(input); i++) {
  empty = " ".repeat(Number(input) - i);
  result = "*".repeat(i);
  console.log(empty + result);
}
