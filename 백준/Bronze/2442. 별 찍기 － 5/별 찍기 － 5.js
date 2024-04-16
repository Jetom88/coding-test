const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = Number(require("fs").readFileSync(filePath).toString());

for (let i = 1; i <= input; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(i * 2 - 1));
}
