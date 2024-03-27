const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

let result = "";

for (let i = 1; i <= Number(input); i++) {
  result = "*".repeat(i);
  console.log(result);
}
