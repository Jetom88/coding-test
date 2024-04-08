const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("");

const alphabet = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];

let result = 0;

const findIdx = (str) => {
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i].includes(str)) {
      return i + 3;
    }
  }
};

for (let i = 0; i < input.length; i++) {
  result = result + findIdx(input[i]);
}

console.log(result);
