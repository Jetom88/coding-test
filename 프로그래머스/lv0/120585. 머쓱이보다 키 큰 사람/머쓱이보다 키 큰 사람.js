function solution(array, height) {
    return array.filter(num => num > height).length
}

solution([149, 180, 192, 170],167)