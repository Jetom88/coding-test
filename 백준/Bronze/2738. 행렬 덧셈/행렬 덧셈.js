const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

function addMatrices(numArr) {
  const numRows = parseInt(numArr[0].split(" ")[0]);
  const numCols = parseInt(numArr[0].split(" ")[1]);

  for (let i = 0; i < numRows; i++) {
    const firstRow = numArr[1 + i].split(" ").map(Number);
    const secondRow = numArr[1 + numRows + i].split(" ").map(Number);
    let resultRow = [];

    for (let j = 0; j < numCols; j++) {
      resultRow.push(firstRow[j] + secondRow[j]);
    }

    console.log(resultRow.join(" "));
  }
}

//로직 더 간단하게 생각해보자 !
addMatrices(input);
