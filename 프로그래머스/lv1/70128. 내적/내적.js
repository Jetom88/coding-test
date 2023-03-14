function solution(a, b) {
  const combine = [a,b]
  let result = 0;
  for(let i = 0; i < combine[0].length; i++){
     result += combine[0][i] * combine[1][i]
   }
  
  return result
}
