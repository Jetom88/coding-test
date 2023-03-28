function solution(n, arr1, arr2) {
    let result = [];

    for (let i = 0; i < n; i++) {
   
      const binary = (arr1[i] | arr2[i]).toString(2);
      
      const paddedBinary = '0'.repeat(n - binary.length) + binary;
  
      const line = paddedBinary.replace(/1/g, '#').replace(/0/g, ' ');
        
       
       result.push(line);
    }

    return result;
}
