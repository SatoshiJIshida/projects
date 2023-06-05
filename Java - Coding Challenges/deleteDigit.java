/**
 * Given some integer, find the maximal number you can obtain by deleting
 * exactly one digit of the given number.
 * 
 * Example:
 * For n = 152, the output should be
 * solution(n) = 52;
 * 
 * For n = 1001, the output should be
 * solution(n) = 101.
 *
 * [execution time limit] 3 seconds (java)
 * [input] integer n
 * 
 * [output] integer
 * 
 * Tests passed: 20/20.
 */
int solution(int n) {
    int max = 0;
    String num = String.valueOf(n);
    StringBuilder process;

    for (int i = 0; i < num.length(); i++) {
        process = new StringBuilder(num);
        // max for comparison to compare with each num where 1 digit is removed from num.
        max = Math.max(max, Integer.parseInt(process.deleteCharAt(i).toString()));
    }
    return max;
}
