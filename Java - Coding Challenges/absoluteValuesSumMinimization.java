/**
 * Given a sorted array of integers a, your task is to determine which element of a is
 * closest to all other values of a. In other words, find the element x in a, which minimizes
 * the following sum:
 * abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
 * 
 * (where abs denotes the absolute value)
 * If there are several possible answers, output the smallest one.
 * 
 * Example:
 * For a = [2, 4, 7], the output should be solution(a) = 4.
 * 
 * for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
 * for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
 * for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
 * The lowest possible value is when x = 4, so the answer is 4.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer a
 * 
 * [output] integer
 * An integer representing the element from a that minimizes the sum of
 * its absolute differences with all other elements.
 * 
 * Tests passed: 19/19.
 */
int solution(int[] a) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    
    for (int i : a) {
        int sum = Arrays.stream(a).reduce(0, (x, y) -> x+Math.abs(y-i));
        result.add(sum);
    }
    
    int min = Collections.min(result);
    return a[result.indexOf(min)];
}
