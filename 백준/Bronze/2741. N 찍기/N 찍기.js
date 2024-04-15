const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = Number(
  require("fs").readFileSync(filePath).toString().trim().split(splitFlag)
);

let result = "";

for (let i = 1; i <= input; i++) {
  result += i + "\n";
}

console.log(result.trim());
