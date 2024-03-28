const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const [n, m] = input[0].split(" ").map(Number);

let basket = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  const [first, last] = input[i].split(" ").map(Number);

  const reversedPart = basket.slice(first - 1, last).reverse();

  basket.splice(first - 1, last - first + 1, ...reversedPart);
}

console.log(basket.join(" "));
