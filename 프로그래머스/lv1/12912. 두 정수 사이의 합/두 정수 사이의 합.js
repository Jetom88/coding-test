function solution(a, b) {
  if(a === b) return a;
  
  const array = [a,b];
  array.sort((a,b) => a-b)
  
  let result = 0;
  
  for(let i = array[0]; i <= array[array.length-1]; i++){
    result += i
   }

    return result
}