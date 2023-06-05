/**
 * Define a word as a sequence of consecutive English letters.
 * Find the longest word from the given string.
 * 
 * Example:
 * For text = "Ready, steady, go!", the output should be
 * solution(text) = "steady".
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string text
 * 
 * [output] string
 * The longest word from text. It's guaranteed that there is a unique output.
 * 
 * Tests passed: 10/10.
 */
function solution(text) {
    const alphabet = [],
          a = 'a'.charCodeAt(),
          z = 'z'.charCodeAt(),
          A = 'A'.charCodeAt(),
          Z = 'Z'.charCodeAt(),
          space = ' ',
          alphabetPattern = /^[a-zA-Z]+$/;
          words = [],
          clean = [],
          toRemove = [];

    for (let i = a; i <= z; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    for (let i = A; i <= Z; i++) {
        alphabet.push(String.fromCharCode(i));
    }

    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (!alphabet.includes(text[i])) {
            words.push(text.slice(count, i));
            count = i;
        }
        if (alphabetPattern.test(text)) return text;
    }

    if (text[count] < text.length) {
        words.push(text.slice(count, text.length));
    }

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!alphabet.includes(words[i][j])) {
                clean.push(words[i].slice(j + 1));
                toRemove.push(i);
            }
        }
    }

    for (let i = 0; i < toRemove.length; i++) {
        words.splice(toRemove[i]);
    }
    words.push(...clean);
    let longest = '';
    const check = [];
    for (let i = 0; i < words.length; i++) {
        check.push(words[i].length);
        longest = words[check.indexOf(Math.max(...check))];
    }
    return longest;
}