const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const [n, m] = input[0].split(" ").map(Number);

let basket = new Array(n).fill(0);

for (let i = 1; i <= m; i++) {
  let [first, limit, ball] = input[i].split(" ").map(Number);
  for (let j = first; j <= limit; j++) {
    basket[j - 1] = ball;
  }
}

console.log(basket.join(" "));
