function solution(rank, attendance) {
    const includeStudent = [rank, attendance]
    const list = []

    for(let i = 0; i < includeStudent[0].length; i++){
        if(includeStudent[1][i]){
            list.push({number:i, rank:includeStudent[0][i]})
        }
    }
    
    
    list.sort((a,b) => a.rank - b.rank)
        
    const result = list.slice(0,3)
    
    const [o, t, h] = result.map(student => student.number)
    
    return (10000 * o) + (100 * t) + h
}