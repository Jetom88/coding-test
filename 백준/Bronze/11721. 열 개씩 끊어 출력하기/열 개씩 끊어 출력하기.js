const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

for (let i = 0; i < input.length; i += 10) {
  console.log(input.substring(i, i + 10));
}
