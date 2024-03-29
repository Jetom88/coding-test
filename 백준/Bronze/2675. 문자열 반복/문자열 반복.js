const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const str = [];

for (let i = 1; i < input.length; i++) {
  const [r, s] = input[i].split(" ");
  console.log(
    s
      .split("")
      .map((x) => x.repeat(Number(r)))
      .join("")
  );
}
