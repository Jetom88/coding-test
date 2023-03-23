function solution(n) {
   let ternary = []
   let result = 0
    
   while(n > 0){
     ternary.push(n%3)
     n = Math.floor(n/3)
   }
    

  ternary.reverse()

  for(let i = 0; i < ternary.length; i++){
   result += ternary[i] * Math.pow(3, i)   
  }
    
    return result
}