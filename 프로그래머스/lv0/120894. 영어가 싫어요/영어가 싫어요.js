function solution(numbers) {
  const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  num.forEach((n, i) => {
    numbers = numbers.split(n).join(i);
  });
  return Number(numbers);
}
