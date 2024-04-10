const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

const lowerCasedInput = input.toLocaleLowerCase();

const obj = {};
const count = [];

let maxValue = 0;

for (const el of lowerCasedInput) {
  obj[el] = (obj[el] || 0) + 1;
}

maxValue = Math.max(...Object.values(obj));

for (const key in obj) {
  if (obj[key] === maxValue) {
    count.push(key);
  }
}

console.log(count.length > 1 ? "?" : count[0].toLocaleUpperCase());

//조건문 간결 + 변수명 수정