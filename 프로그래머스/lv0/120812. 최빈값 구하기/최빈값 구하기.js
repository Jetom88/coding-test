function solution(array) {
  const mapping = {}
  
  for(let i = 0; i < array.length; i++){
    if(mapping[array[i]] === undefined){
      mapping[array[i]] = 1
    } else {
      mapping[array[i]]++
    }
  }
  
  let maxCount = 0;
  let mode = -1
 
  for(const key in mapping){
    if(mapping[key] > maxCount){
      maxCount = mapping[key]
      mode = key
    } else if(mapping[key] === maxCount){
      mode = -1
    }
  }
  
  return Number(mode)
}

solution([1, 1, 2, 2])