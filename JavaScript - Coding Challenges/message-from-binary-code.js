/**
 * Decode the binary code message.
 * The first 8 characters of the code are e.g. 01001000, which is 72 in the binary 
 * numeral system. 72 stands for H in the ASCII-table, so the first letter is H.
 * Other letters can be obtained in the same manner.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string code
 * 
 * [output] string
 * The decrypted message.
 * 
 * Tests passed: 20/20.
 */
function solution(code) {
    let start = 0,
        extract = [],
        answer = '';
    for (let i = 1; i < code.length; i++) {
        if (i += 7) {
            const section = code.slice(start, i);
            extract.push(section);
            const conversion = String.fromCharCode(parseInt(extract[0], 2));
            answer += conversion;
            start = i;
            extract = [];
        }
    }
    return answer;
}