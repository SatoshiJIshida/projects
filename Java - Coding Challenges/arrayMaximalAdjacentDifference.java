/**
 * Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
 * 
 * Example:
 * For inputArray = [2, 4, 1, 0], the output should be solution(inputArray) = 3.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer inputArray
 * 
 * [output] integer
 * The maximal absolute difference.
 * 
 * Tests passed: 13/13.
 */
int solution(int[] inputArray) {
    int result = 0;
    ArrayList<Integer> resultArray = new ArrayList<Integer>();

    for (int i = 0; i < inputArray.length; i++) {
        int a = i;
        int x = i+1;
        int b = i+2;
        if (b < inputArray.length) {
            int diff1 = Math.abs(inputArray[x] - inputArray[a]);
            int diff2 = Math.abs(inputArray[x] - inputArray[b]);
            int maxEachIteration = Math.max(diff1, diff2);
            resultArray.add(maxEachIteration);
            result = Collections.max(resultArray);
        }
    }
    return result;
}
