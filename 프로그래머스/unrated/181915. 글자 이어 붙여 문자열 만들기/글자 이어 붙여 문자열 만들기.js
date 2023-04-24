function solution(my_string, index_list) {
    let result = []
    
    for(let i = 0; i < index_list.length; i++){
       result.push(my_string[index_list[i]])
    }
    
    return result.join("")
}