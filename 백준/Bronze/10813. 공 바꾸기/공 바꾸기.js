const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const [n, m] = input[0].split(" ").map(Number);

let basket = Array.from({ length: n }).map((_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  const [left, right] = input[i].split(" ").map(Number);

  let temp = basket[left - 1];
  basket[left - 1] = basket[right - 1];
  basket[right - 1] = temp;
}

console.log(basket.join(" "));
