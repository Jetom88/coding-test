const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = Number(require("fs").readFileSync(filePath).toString().trim());

let flag = 0;
let count = 1;

for (let i = 1; i <= input; i++) {
  flag = i * 2 - 1;

  console.log(`${" ".repeat(input - i)}${"*".repeat(i * 2 - 1)}`);
}

for (let j = flag - 2; j >= 1; j -= 2) {
  console.log(`${" ".repeat(count)}${"*".repeat(j)}`);

  count++;
}
