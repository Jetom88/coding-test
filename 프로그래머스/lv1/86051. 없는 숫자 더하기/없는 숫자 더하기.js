function solution(numbers) {

  const allNum = Array.from(Array(10).keys())
  let result = 0;
  
  for(let i = 0; i < allNum.length; i++){
    if(numbers.indexOf(allNum[i]) === -1) {
     result += allNum[i]
    }
  }
  
  return result
 
}