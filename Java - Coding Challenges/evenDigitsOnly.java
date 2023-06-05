/**
 * Check if all digits of the given integer are even.
 * 
 * Example:
 * For n = 248622, the output should be
 * solution(n) = true;
 * For n = 642386, the output should be
 * solution(n) = false.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] integer n
 * 
 * [output] boolean
 * true if all digits of n are even, false otherwise.
 * 
 * Tests passed: 20/20.
 */
boolean solution(int n) {
    ArrayList<Integer> digits = new ArrayList<Integer>();
    while (n > 0) {
        digits.add(n % 10);
        n /= 10;
    }
    
    for (int i : digits) {
        if ((i % 2 != 0)) {
            return false;
        }
    }
    return true;
}
