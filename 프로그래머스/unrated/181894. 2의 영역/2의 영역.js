function solution(arr) {
    const frist = arr.indexOf(2)
    const last = arr.lastIndexOf(2)
    return frist === -1 ? [-1] : arr.slice(frist, last+1)
}