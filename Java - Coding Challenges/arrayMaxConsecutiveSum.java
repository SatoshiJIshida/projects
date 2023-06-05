/**
 * Given array of integers, find the maximal possible sum of some of its k consecutive elements.
 * 
 * Example:
 * For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
 * solution(inputArray, k) = 8.
 * All possible sums of 2 consecutive elements are:
 * 
 * 2 + 3 = 5;
 * 3 + 5 = 8;
 * 5 + 1 = 6;
 * 1 + 6 = 7.
 * Thus, the answer is 8.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer inputArray
 * [input] integer k
 * 
 * [output] integer
 * 
 * Tests passed: 20/20.
 */
int solution(int[] inputArray, int k) {
    int[] section = Arrays.copyOfRange(inputArray, 0, k);
    int calc = Arrays.stream(section).reduce(0, (a,b) -> a+b);
    int res = calc;
    
    for (int i = 0; i < inputArray.length-k; i++) {
        calc += inputArray[i+k] - inputArray[i];
        res = Math.max(res, calc);
    }
    return res;
}
