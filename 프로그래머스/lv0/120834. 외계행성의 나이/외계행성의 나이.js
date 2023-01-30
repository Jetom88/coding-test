const planetAge = {
  "0":"a",
  "1":"b",
  "2":"c",
  "3":"d",
  "4":"e",
  "5":"f",
  "6":"g",
  "7":"h",
  "8":"i",
  "9":"j",
}

function solution(age){
  const ageChange = String(age).split("")
  const result = [];
  
  for(let i = 0; i < ageChange.length; i++){
    result.push(planetAge[ageChange[i]])
  }
  
  return result.join("")
}
