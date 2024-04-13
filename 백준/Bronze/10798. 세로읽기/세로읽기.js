// Aa0aPAf985Bz1EhCz2W3D1gkD6x

const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const stringArray = input.map((string) => string.split(""));

function vericalReading() {
  const maxLength = Math.max(...stringArray.map((str) => str.length));
  let str = "";

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < stringArray.length; j++) {
      if (stringArray[j][i] !== undefined) {
        str += stringArray[j][i];
      }
    }
  }

  console.log(str);
}

vericalReading();
