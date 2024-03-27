const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const splitFlag = process.platform === "linux" ? "\n" : "\r\n";

const input = require("fs").readFileSync(filePath).toString().trim().split(splitFlag);

input.shift()

for (let i = 0; i < input.length; i++) {
  const brakets = input[i]
  const stack = []
  let result = "YES"

  for (let j = 0; j < brakets.length; j++) {
    if(brakets[j] === "(") stack.push("(")
    else {
      if(!stack.pop()){
        result = "NO"
        break
      }
    }
  }
    
  if(stack.length !== 0) result = "NO"

  console.log(result)
}