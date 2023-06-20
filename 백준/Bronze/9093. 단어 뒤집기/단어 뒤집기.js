const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

input.shift();

for (let i = 0; i < input.length; i++) {
  const str = input[i].split(" ");
  console.log([...str].map((x) => x.split("").reverse().join("")).join(" "));
}
