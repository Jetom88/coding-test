function solution(my_string) {
  let result = []
  for(let i = 0; i < my_string.length; i++){    
    if(!isNaN(Number(my_string[i]))){
      result.push(Number(my_string[i]))
    }
  }

  return result.sort((a,b)=>a-b)
}