const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

function sliceNum(numArr) {
  const allArr = [];
  let divideArr = [];
  const twoDimensionalArr = [];

  for (let i = 1; i < numArr.length; i++) {
    allArr.push(numArr[i].split(" "));
  }

  for (let i = 0; i < allArr.length / 2; i++) {
    divideArr = [allArr[i], allArr[allArr.length / 2 + i]];

    twoDimensionalArr.push(divideArr);
  }

  for (let i = 0; i < twoDimensionalArr.length; i++) {
    const frist = twoDimensionalArr[i][0].map(Number);
    const second = twoDimensionalArr[i][1].map(Number);
    let result = [];

    for (let i = 0; i < frist.length; i++) {
      result.push(frist[i] + second[i]);
    }

    console.log(result.join(" "));
  }
}

sliceNum(input);
