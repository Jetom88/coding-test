function solution(absolutes, signs) {
  const combine = [absolutes, signs]

  let result = [];
  
  for(let i = 0; i < combine[0].length; i++){
    if(combine[1][i] === false){
      result.push(combine[0][i] * -1)
    } else {
      result.push(combine[0][i])
    }
  }
  
  return result.reduce((acc,cur) => acc+cur)
}