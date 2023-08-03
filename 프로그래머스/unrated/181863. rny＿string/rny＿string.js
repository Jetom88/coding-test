function solution(rny_string) {
  let result = []
  for(let i = 0; i < rny_string.length; i++){
    if(rny_string[i] === "m"){
      result.push(rny_string[i].replace("m", "rn"))
    } else {
      result.push(rny_string[i])
    }
  }
  
  return result.join("")
}