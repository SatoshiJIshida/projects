/**
 * Given a string, output its longest prefix which contains only digits.
 * For inputString = "123aa1", the output should be
 * solution(inputString) = "123".
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] string
 * 
 * Tests passed: 12/12.
 */
function solution(inputString) {
	inputString.split('');
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let ret = '';
    for (let i = 0; i < inputString.length; i++) {
        if (nums.includes(parseInt(inputString[i]))) {
            ret += inputString[i];
        }
        if (!nums.includes(parseInt(inputString[i]))) {
            break;
        }
    }
    return ret;
}