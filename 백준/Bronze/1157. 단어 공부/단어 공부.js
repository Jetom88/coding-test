const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

const changeLowerCase = input.toLocaleLowerCase();

const obj = {};
const count = [];

let maxValue = 0;

for (const el of changeLowerCase) {
  obj[el] === undefined ? (obj[el] = +1) : obj[el]++;
}

maxValue = Math.max(...Object.values(obj));

for (const key in obj) {
  if (obj[key] === maxValue) {
    count.push(key);
  }
}

console.log(count.length > 1 ? "?" : count[0].toLocaleUpperCase());
