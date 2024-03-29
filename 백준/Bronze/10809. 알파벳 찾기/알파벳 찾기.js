const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("");

const alphabet = [];
const result = [];

for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
}

for (let i = 0; i < alphabet.length; i++) {
  result.push(input.indexOf(alphabet[i]));
}

console.log(result.join(" "));
