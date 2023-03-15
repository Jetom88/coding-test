function solution(arr1, arr2) {
  const answer = [];
  
  for (let i = 0; i < arr1.length; i++) {
    const newRow = [];
    
    for (let j = 0; j < arr1[i].length; j++) {
      newRow.push(arr1[i][j] + arr2[i][j]);
    }
    
    answer.push(newRow);
  }
  
  return answer;
}