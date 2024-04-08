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

const findDialNumber = (str) => {
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i].includes(str)) {
      return i + 3;
    }
  }

  return 0;
};

const result = input.reduce((acc, cur) => acc + findDialNumber(cur), 0);

console.log(result);
