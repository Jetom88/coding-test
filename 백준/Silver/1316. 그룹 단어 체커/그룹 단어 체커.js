const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const isGroup = (str) => {
  const seen = new Set();
  let prevChar = null;

  for (let char of str) {
    if (seen.has(char) && char !== prevChar) return false;
    seen.add(char);
    prevChar = char;
  }

  return true;
};

let count = 0;

for (let i = 1; i < input.length; i++) {
  if (isGroup(input[i])) count++;
}

console.log(count);
