function isDivisor(x){
  let result = []
  
  for(let i = 1; i <= x; i++){
    if(x % i === 0){
        result.push(i)      
    }
  }
  return result.length % 2 === 0 ? true : false
}

function solution(left, right) {
  let result = 0
  for(let i = left; i <= right; i++){
    if(isDivisor(i)){
      result += i
    } else {
      result -= i
    }
  }
  
  return result
}