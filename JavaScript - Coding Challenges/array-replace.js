/**
 * Given an array of integers, replace all the occurrences of elemToReplace with
 * substitutionElem.
 * 
 * Example:
 * For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3,
 * the output should be
 * solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer inputArray, integer elemToReplace, integer substitutionElem
 * 
 * [output] array.integer
 * 
 * Tests passed: 16/16.
 */
function solution(inputArray, elemToReplace, substitutionElem) {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === inputArray[inputArray.indexOf(elemToReplace)]) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}