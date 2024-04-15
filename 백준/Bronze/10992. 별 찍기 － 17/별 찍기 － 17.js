const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = Number(require("fs").readFileSync(filePath).toString().trim());

for (let i = 1; i <= input; i++) {
  const spaces = " ".repeat(input - i);

  if (i === 1) {
    console.log(`${spaces}*`);
  } else if (i === input) {
    console.log("*".repeat(2 * i - 1));
  } else {
    const middleSpaces = " ".repeat(2 * i - 3);
    console.log(`${spaces}*${middleSpaces}*`);
  }
}
