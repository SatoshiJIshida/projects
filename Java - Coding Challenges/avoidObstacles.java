/**
 * You are given an array of integers representing coordinates of obstacles situated on a straight line.
 * 
 * Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make
 * jumps of the same length represented by some integer.
 * 
 * Find the minimal length of the jump enough to avoid all the obstacles.
 * 
 * Example:
 * For inputArray = [5, 3, 6, 7, 9], the output should be solution(inputArray) = 4.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer inputArray
 * 
 * [output] integer
 * The desired length.
 * 
 * Tests passed: 12/12.
 */
int solution(int[] inputArray) {
    int max = Arrays.stream(inputArray).max().getAsInt();
    List<Integer> list = new ArrayList<Integer>();
    
    for (int i : inputArray) {
        list.add(i);
    }

    for (int i = 1; i < max; i++) {
        final int y = i;
        boolean div = list.stream().anyMatch(x -> x % y == 0);
        if (!div) {
            return i; // the first num that doesn't divide into any of the elements.
        }
    }
    return max + 1;
}
