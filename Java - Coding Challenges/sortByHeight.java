/**
 * Some people are standing in a row in a park. There are trees between them which cannot be moved.
 * Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
 * People can be very tall!
 * 
 * Example:
 * For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
 * solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer a
 * 
 * [output] array.integer
 * Sorted array a with all the trees untouched.
 * 
 * Tests passed: 12/12.
 */
int[] solution(int[] a) {
    int[] sortedInput = new int[a.length];
    for (int i = 0; i < a.length; i++) {
        sortedInput[i] = a[i];
    }
    
    Arrays.sort(sortedInput);
    sortedInput = Arrays.stream(sortedInput).filter(x -> x != -1).toArray();
    
    int j = 0;
    for (int i = 0; i < a.length; i++) {
        if (a[i] == -1) {
            continue;
        } else {
            a[i] = sortedInput[j++];
        }
    }
    return a;
}
