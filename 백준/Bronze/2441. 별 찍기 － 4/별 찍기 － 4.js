const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = Number(require("fs").readFileSync(filePath).toString());

for (let i = 0; i < input; i++) {
  console.log(" ".repeat(i) + "*".repeat(input - i));
}
