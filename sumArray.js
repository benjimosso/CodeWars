function sumArray(array) {
    if (array === null || array === undefined || array.length <= 2) {
        return console.log(0)
        
    }
    const arraySorted = array.sort(function (a, b) { return b - a;})
    const sliced = arraySorted.slice(1, -1)
    let sum = sliced.reduce((a, b) => a + b, 0)
    return console.log(sum)

}

// console.log(sumArray([ ]))
sumArray(null)
sumArray([ ]) 
sumArray([ 3 ])
sumArray([ 3, 5 ])
sumArray([ 3, 5, 6 ])
sumArray([ 6, 2, 1, 8, 10])
sumArray([ 0, 1, 6, 10, 10 ])
sumArray([ -6, -20, -1, -10, -12 ])
sumArray([ -6, 20, -1, 10, -12 ])
