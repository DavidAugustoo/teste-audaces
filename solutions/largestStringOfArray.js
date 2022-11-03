function largestStringOfArray(array) {
    array.sort((a, b) => b.length - a.length)

    const biggestStrings = []

    for (let item in array) {
        if (array[item].length === array[0].length) {
            biggestStrings.push(array[item])
        }
    }

    return biggestStrings
}

console.log(largestStringOfArray(["aba", "aa", "ad", "vcd", "aba"])) // Saída: [ 'aba', 'vcd', 'aba' ]
console.log(largestStringOfArray(["assde", "dads", "wads", "arsdw", "dws", "dsaw"])) // Saída: [ 'assde', 'arsdw' ]
console.log(largestStringOfArray(["dbac", "dd"])) // Saída: [ 'dbac' ]
console.log(largestStringOfArray(["dasd", "dads", "dsa", "da", "ns"])) // Saída: [ 'dasd', 'dads' ]
console.log(largestStringOfArray(["w", "wd", "s", "da", "d"])) // Saída: [ 'wd', 'da' ]