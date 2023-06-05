/**
 * Given a sequence of integers as an array, determine whether it is possible to obtain a strictly
 * increasing sequence by removing no more than one element from the array.
 * 
 * Example:
 * For sequence = [1, 3, 2, 1], the output should be
 * solution(sequence) = false.
 * 
 * For sequence = [1, 3, 2], the output should be
 * solution(sequence) = true.
 * 
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer sequence
 * 
 * [output] boolean
 * Return true if it is possible to remove one element from the array in order to get a strictly
 * increasing sequence, otherwise return false.
 * 
 * Tests passed: 38/38.
 */
function solution(sequence) {
    let found = false;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i - 1] >= sequence[i]) {
            if (found) {
                return false;
            } else {
                found = true;
            }

            if (i === 1 || i + 1 === sequence.length) {
                continue;
            } else if (sequence[i] > sequence[i - 2]) {
                sequence[i - 1] = sequence[i - 2];
            } else if (sequence[i - 1] >= sequence[i + 1]) {
                return false;
            }
        }
    }
    return true;
}