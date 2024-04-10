const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

const reverseStr = input.split("").reverse().join("");

console.log(input === reverseStr ? 1 : 0);
