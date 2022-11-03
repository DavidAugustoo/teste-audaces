# Teste Técnico - Audaces

## Exercício 1

Jorge recebeu estátuas de tamanhos diferentes como presente em seu aniversário, cada estátua tendo um tamanho inteiro não negativo. Como ele gosta de fazer as coisas perfeitas, ele quer organizá-las do menor para o maior, de modo que cada estátua seja maior que a anterior exatamente por 1. Ele pode precisar de algumas estátuas adicionais para conseguir isso. Ajude-o a descobrir o número mínimo de estátuas adicionais necessárias para completar a organização.

**Entrada/Saída**

- **Input**: Uma matriz de inteiros não negativos distintos;
- **Output**: O número mínimo de estátuas que precisam ser adicionadas ao existente;

### Solução:

```js
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
```

[Ver código fonte](./solutions/calculateMissingStakes.js)

## Exercício 2

Dado um array de strings, retorne outro array contendo todos os seus strings mais longos. 

**Entrada/Saída**

- **Input**: Uma matriz unidimensional não nula de strings;
- **Output**: Matriz das strings mais longas, armazenadas na mesma ordem que no input;

### Solução:

```js
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
```

[Ver código fonte](./solutions/largestStringOfArray.js)

## Exercício 3

Escreva uma função que reverta caracteres em parênteses (possivelmente aninhados) na string de entrada. As strings de entrada sempre serão bem formadas com ()s correspondentes.

**Entrada/Saída**

- **Input**: Uma string que consiste em letras minúsculas do inglês e os caracteres “(“ e “)”;
- **Output**: String, com todos os caracteres que estavam entre parênteses invertidos;

### Solução:

```js
function reverseWordInParentheses(string) {
    let inWord = false;
    const words = {}
    let word = ''

    for (let currentLetter of string) {

        if (currentLetter === ")") {
            inWord = false;
            words[word] = word.split('').reverse().join('')
            word = ""
        }

        if (inWord) word += currentLetter

        if (currentLetter === "(") inWord = true;
    }

    Object.entries(words).forEach(([word, newWord]) => {
        string = string.replace(`(${word})`, newWord)
    })

    return string.includes('(') ? reverseWordInParentheses(string) : string
}

console.log(reverseWordInParentheses('foo(bar)baz(blim)')) // Saída: foorabbazmilb
console.log(reverseWordInParentheses('foo(bar)baz')) // Saída: foorabbaz
console.log(reverseWordInParentheses('foo(bar)baz(bl(foo)im)')) // Saída: foorabbazoofmibl
console.log(reverseWordInParentheses('foo(bar)baz(foo)')) // Saída: foorabbazoof
console.log(reverseWordInParentheses('bar(foo(miau))blim(foo)')) // Saída: baruaimfooblimoof
```

[Ver código fonte](./solutions/reverseWordInParentheses.js)