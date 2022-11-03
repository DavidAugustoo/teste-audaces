function calculateMissingStakes(array) {
    array.sort((a, b) => a - b)
    let missingStakes = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] > 1) {
            missingStakes += array[i + 1] - array[i] - 1
        }
    }

    return missingStakes
}

console.log(calculateMissingStakes([6, 2, 3, 8])) // Saída: 3
console.log(calculateMissingStakes([0, 3, 5])) // Saída: 3
console.log(calculateMissingStakes([12, 4, 6, 2])) // Saída: 7
console.log(calculateMissingStakes([10, 2, 3, 18, 14])) // Saída: 12
console.log(calculateMissingStakes([0, 2])) // Saída: 1