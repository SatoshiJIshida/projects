/**
 * Given an array of equal-length strings, you'd like to know if it's possible to
 * rearrange the order of the elements in such a way that each consecutive pair of
 * strings differ by exactly one character. Return true if it's possible, and false
 * if not.
 * 
 * Example:
 * For inputArray = ["ab", "bb", "aa"], the output should be
 * solution(inputArray) = true.
 * 
 * It's possible to arrange these strings in a way that each consecutive pair of
 * strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"),
 * so return true.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.string inputArray
 * 
 * [output] boolean
 * Return true if the strings can be reordered in such a way that each neighbouring
 * pair of strings differ by exactly one character (false otherwise).
 * 
 * Tests passed: 21/21.
 */
function solution(inputArray) {
    let   result = false;
    const solution = [];

    const backTrack = (() => {
        for (let i = 0; i < inputArray.length; i++) {
            if (result === true) break;
            solution.push(inputArray.splice(i, 1)[0]);

            if (inputArray.length === 0) {
                result = check();
            } else {
                backTrack();
            }
            inputArray.splice(i, 0, solution.pop());
        }
    });

    const check = (() => {
        for (let i = 0; i < solution.length - 1; i++) {
            let count = 0;
            for (let j = 0; j < solution[i].length; j++) {
                if (solution[i][j] !== solution[i + 1][j]) {
                    count++;
                }
            }
            if (count !== 1) return false;
        }
        return true;
    });

    backTrack();
    return result;
}