/**
 * Given a string consisting of lowercase English letters, find the largest square 
 * number which can be obtained by reordering the string's characters and replacing 
 * them with any digits you need (leading zeros are not allowed) where same characters 
 * always map to the same digits and different characters always map to different digits.
 * If there is no solution, return -1.
 * 
 * Example:
 * For s = "aba", the output should be solution(s) = 900.
 * It can be obtained after reordering the initial string into
 * "baa" and replacing "a" with 0 and "b" with 9.
 * 
 * For s = "ab", the output should be solution(s) = 81.
 * The largest 2-digit square number with different digits is 81.
 * 
 * For s = "zzz", the output should be solution(s) = -1.
 * There are no 3-digit square numbers with identical digits.
 *
 * [execution time limit] 4 seconds (js)
 * [input] string s
 * 
 * [output] integer
 * 
 * Tests passed: 12/12.
 * Sample tests: 6/6
 * Hidden tests: 6/6
 */
function solution(s) {
    const collectSquares = [];
    let   square = 0,
          output = '';
    
    const squares = [...Array(64000)].map((k, i) => {
        return ''+i*i;
    });
    
    const counts = ((input) => {
       const collectCounts = {};
       input.forEach(el => collectCounts[el] = (collectCounts[el] || 0) + 1);
       return Object.values(collectCounts).sort().join('');
    });
    
    s = s.split('');
    
    for (let i = 0; i < squares.length; i++) {
        square = squares[i];
        if (square.length === s.length) {
            square = square.split('');
            const test1 = counts(s);
            const test2 = counts(square);
            if (test1 === test2) {
                output = square.join('');
            }
        }
    }

    if (output) {
        return parseInt(output);
    } else {
        return -1;
    }
}