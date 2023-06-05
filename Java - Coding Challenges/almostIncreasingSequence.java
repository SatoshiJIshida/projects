/**
 * Given a sequence of integers as an array, determine whether it is possible to obtain a strictly
 * increasing sequence by removing no more than one element from the array.
 * 
 * Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.
 * Sequence containing only one element is also considered to be strictly increasing.
 *
 * Example:
 * For sequence = [1, 3, 2, 1], the output should be solution(sequence) = false.
 * For sequence = [1, 3, 2], the output should be solution(sequence) = true.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer sequence
 * 
 * [output] boolean
 * Return true if it is possible to remove one element from the array in order to get a strictly
 * increasing sequence, otherwise return false.
 * 
 * Tests passed: 38/38.
 */
boolean solution(int[] sequence) {
    boolean found = false;
    
    for (int i = 1; i < sequence.length; i++) {
        if (sequence[i-1] >= sequence[i]) {
            if (found) {
                return false; // if another element further down is descending then false.
            } else {
                found = true; // found the 1 element to remove.
            }
           
            if ((i == 1) || (i + 1 == sequence.length)) {  // if at 1 or the end.
                continue;
            } else if (sequence[i] > sequence[i-2]) { // from index 1 or end.
                sequence[i-1] = sequence[i-2]; // simulate removing a duplicate that is greater before the end.
            } else if (sequence[i-1] >= sequence[i+1]) {
                return false; // another match for a descending element further down.
            }
        }
    }
    return true;
}
