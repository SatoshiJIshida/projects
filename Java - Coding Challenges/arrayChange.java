/**
 * You are given an array of integers. On each move you are allowed to increase exactly
 * one of its element by one. Find the minimal number of moves required to obtain a strictly
 * increasing sequence from the input.
 * 
 * Example:
 * For inputArray = [1, 1, 1], the output should be solution(inputArray) = 3.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer inputArray
 * 
 * [output] integer
 * The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
 * It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
 * 
 * Tests passed: 20/20.
 */
int solution(int[] inputArray) {
    int count = 0;
    ArrayList<Integer> input = new ArrayList<Integer>();
    
    for (int i : inputArray) {
        input.add(i);
    }

    for (int i = 0; i < input.size()-1; i++) {
        int prev = input.get(i);
        int cur = input.get(i+1);
        
        if (prev >= cur) {
            int temp = prev - cur + 1;
            input.set(i+1, input.get(i+1)+temp);
            count += temp;
        }
    }
    return count;
}
