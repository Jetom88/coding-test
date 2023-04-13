function solution(s) {
  const num = s.split(" ").map(Number)

  const min = Math.min(...num)
  const max = Math.max(...num)
  
  return `${min} ${max}`
}