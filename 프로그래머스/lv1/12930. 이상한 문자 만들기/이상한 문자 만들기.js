function solution(s) {
  const words = s.split(" ") 
  let result = []
  
  for(let i = 0; i < words.length; i++){
    let word = words[i]
    let converted = ""
    for(let j = 0; j < word.length; j++){
      if(j % 2 === 0){
        converted += word[j].toUpperCase()
      } else {
        converted += word[j].toLowerCase()
      }
    }
    result.push(converted)
  }

  return result.join(" ")
}