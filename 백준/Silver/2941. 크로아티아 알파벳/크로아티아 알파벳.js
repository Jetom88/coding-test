const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

let count = 0;
let str = "";

const includesStr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i = 0; i < input.length; i++) {
  str = input[i] + input[i + 1];
  if (includesStr.includes(str)) {
    count++;
  }

  str === "dz" && input[i + 2] === "=" && count++;
}

console.log(input.length - count);
