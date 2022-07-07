/*
    'a' + 'cb' = 'acb'
    'ab' + 'c' = 'abc'
    'abc' + 'd' + 'defg' = 'abcddefg'
*/

function arrayStringAreEquil(word1,word2) {
    return word1.join('') === word2.join('')
}

console.log(arrayStringAreEquil(['ab', 'c'],['a', 'bc']));