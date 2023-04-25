const highAndLow = (numbers) => {
    let highest = Math.max.apply(null, numbers.split(' '))
    let lowest = Math.min.apply(null, numbers.split(' '))
    let final = []
    final.push(highest, lowest)
    return final.join(' ')
}

console.log(highAndLow("1 2 3 4 5")) // 5 1
console.log(highAndLow("1 2 -3 4 5")) // 5 -3
console.log(highAndLow("1 9 3 4 -5")) // 9 -5
