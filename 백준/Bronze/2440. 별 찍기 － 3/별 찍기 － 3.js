const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = Number(require("fs").readFileSync(filePath).toString().trim());

let result = "";

for (let i = input; i > 0; i--) {
  result += "*".repeat(i) + "\n";
}

console.log(result.trim());
