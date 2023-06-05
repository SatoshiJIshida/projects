/**
 * You are given an array of integers. On each move you are allowed to increase exactly one of its
 * element by one. Find the minimal number of moves required to obtain a strictly increasing 
 * sequence from the input.
 * 
 * Example:
 * For inputArray = [1, 1, 1], the output should be
 * solution(inputArray) = 3.
 * e.g. 1, 2 (1), 3 (11) = 3 1s.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer inputArray
 * 
 * [output] integer
 * The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
 * It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
 * 
 * Tests passed: 20/20.
 */
function solution(inputArray) {
    let count = 0;
    for (let i = 0; i < inputArray.length-1; i++) {
        prev = inputArray[i];
        cur = inputArray[i+1];
        
        if (prev >= cur) {
            let temp = prev - cur + 1;
            inputArray[i+1] += temp;
            count += temp;
        }
    }
    return count;   
}