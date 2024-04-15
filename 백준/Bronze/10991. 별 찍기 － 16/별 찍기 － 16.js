const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = Number(require("fs").readFileSync(filePath).toString().trim());

for (let i = 1; i <= input; i++) {
  const spaces = " ".repeat(input - i);
  const stars = "* ".repeat(i).trim();
  console.log(spaces + stars);
}
