function solution(s) {
    const num = s.split(' ');
    
    let min = Number(num[0]);
    let max = Number(num[0]);
    
    for (let i = 1; i < num.length; i++) {
        if (Number(num[i]) < min) {
            min = num[i];
        }
        if (Number(num[i]) > max) {
            max = num[i];
        }
    }
    return min + ' ' + max;
}