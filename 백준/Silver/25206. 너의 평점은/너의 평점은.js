const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(splitFlag);

function grade() {
  const grades = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
    P: "",
  };

  const filterSubject = [];

  for (let i = 0; i < input.length; i++) {
    const subject = input[i].split(" ");

    let newSubject = [];

    newSubject = [subject[0], Number(subject[1]), grades[subject[2]]];

    if (!newSubject.includes("")) {
      filterSubject.push(newSubject);
    }
  }

  let count = 0;
  let totalCredits = 0;

  for (let i = 0; i < filterSubject.length; i++) {
    count += filterSubject[i][1] * filterSubject[i][2];
    totalCredits += filterSubject[i][1];
  }

  console.log(count / totalCredits);
}

grade();
