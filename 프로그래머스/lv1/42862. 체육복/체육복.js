function solution(n, lost, reserve) {
    const students = new Array(n).fill(1)
    let result = 0;
    
    for(let i = 0; i < lost.length; i++){
        students[lost[i]-1]--
    }
    
    for(let i = 0; i < reserve.length; i++){
        students[reserve[i]-1]++
    }
    
    for(let i = 0; i < students.length; i++){
        if(students[i] === 0){
            if(students[i-1] === 2){
                students[i]++
                students[i-1]--
            } else if(students[i+1] === 2) {
                students[i]++
                students[i+1]--
            }
        }
    }
    
    students.forEach(num => num > 0 && result++)
    
    return result
}