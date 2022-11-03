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