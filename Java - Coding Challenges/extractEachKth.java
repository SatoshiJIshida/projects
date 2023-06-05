/**
 * Given array of integers, remove each kth element from it.
 * 
 * Example:
 * For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
 * solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer inputArray
 * [input] integer k
 * 
 * [output] array.integer
 * inputArray without elements k - 1, 2k - 1, 3k - 1 etc.
 * 
 * Tests passed: 10/10.
 */
int[] solution(int[] inputArray, int k) {
    List<Integer> input = Arrays.stream(inputArray).boxed().collect(Collectors.toList());
    int[] empty = {};
    int remove = k-1;
    
    if (remove == 0) {
        return empty;
    }
    
    for (int i = 1; i < input.size(); i++) {
        if (i % remove == 0) {
            input.remove(i);
        }
    }
    
    int[] result = input.stream().mapToInt(x->x).toArray();
    return result;
}
