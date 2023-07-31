function solution(arr, k) {
    const setArr = Array.from(new Set(arr))
    const result = []
    for(let i = 0; i < k; i++){
        if(setArr[i] === undefined){
            result.push(-1)
        } else {
            result.push(setArr[i])
        }
    }
    return result
}