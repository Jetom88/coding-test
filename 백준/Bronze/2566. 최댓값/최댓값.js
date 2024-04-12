const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

const numArr = input.map((row) => {
  return row.split(" ").map(Number);
});

function findMaxNumber() {
  let overallMaxValue = -Infinity;
  const maxPosition = {
    row: 0,
    col: 0,
  };

  for (let i = 0; i < numArr.length; i++) {

    for (let j = 0; j < numArr[i].length; j++) {
      if (numArr[i][j] > overallMaxValue) {
        overallMaxValue = numArr[i][j];
        maxPosition.row = i + 1;
        maxPosition.col = j + 1;
      }
    }
  }

  console.log(overallMaxValue);
  console.log(maxPosition.row, maxPosition.col);
}

//작은 값은 -Infinity 사용
findMaxNumber();
