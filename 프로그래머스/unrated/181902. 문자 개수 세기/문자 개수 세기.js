function solution(my_string) {
    const result = new Array(52).fill(0)
    
    for(let i = 0; i < my_string.length; i++){
        const charCode = my_string.charCodeAt(i)
        if(charCode >= 65 && charCode <= 90){
            result[charCode - 65] += 1
        } else if(charCode >= 97 && charCode <= 122) {
            result[charCode - 71] += 1
        }
    }
    return result
}