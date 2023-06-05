/**
 * Given an array of integers, find the pair of adjacent elements that has the largest 
 * product and return that product.
 *
 * Example:
 * For inputArray = [3, 6, -2, -5, 7, 3], the output should be solution(inputArray) = 21.
 * 7 and 3 produce the largest product.
 *
 * [execution time limit] 3 seconds (java)
 * [input] array.integer inputArray
 * 
 * [output] integer
 * The largest product of adjacent elements.
 * 
 * Tests passed: 18/18.
 */
int solution(int[] inputArray) {
    int[] collect = new int[inputArray.length-1];
    
    for (int i = 0; i < inputArray.length-1; i++) {
        int pairSum = inputArray[i] * inputArray[i+1];
        collect[i] = pairSum;
    }
    
    int max = collect[0];
    for (int i = 0; i < collect.length; i++) {
        max = Math.max(max, collect[i]);
    }
    return max;
}
