/**
 * Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
 * 
 * Example:
 * For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
 * solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer inputArray
 * [input] integer elemToReplace
 * [input] integer substitutionElem
 * 
 * [output] array.integer
 * 
 * Tests passed: 16/16.
 */
int[] solution(int[] inputArray, int elemToReplace, int substitutionElem) {
    for (int i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}
