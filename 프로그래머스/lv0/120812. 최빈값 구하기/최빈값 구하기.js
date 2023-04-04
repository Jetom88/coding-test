function solution(array) {
    const mapped = {}
    
    array.forEach(item => mapped[item] = (mapped[item] ?? 0) + 1)
    
    const max = Math.max(...Object.values(mapped))
    
    const result = Object.entries(mapped).filter(([key, value]) => value === max).map(x=>Number(x[0]))
    
    if (result.length > 1) return -1
    
    return result[0]
}