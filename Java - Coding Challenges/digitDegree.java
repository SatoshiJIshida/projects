/**
 * Let's define digit degree of some positive integer as the number of times we
 * need to replace this number with the sum of its digits until we get to a one digit number.
 * 
 * Given an integer, find its digit degree.
 * 
 * Example:
 * For n = 5, the output should be
 * solution(n) = 0;
 * 
 * For n = 91, the output should be
 * solution(n) = 2.
 * 9 + 1 = 10 -> 1 + 0 = 1.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] integer n
 * 
 * [output] integer
 * 
 * Tests passed: 20/20.
 */
int solution(int n) {
    int count = 0;
    String cur = String.valueOf(n);
    
    while (cur.length() > 1) {
        int[] digits = getDigits(cur);
        cur = String.valueOf(sum(digits));
        count++;
    }
    return count;
}

int[] getDigits(String num) {
    int[] digits = new int[num.length()];
    int cur;
    
    for (int i = 0; i < num.length(); i++) {
        cur = Integer.parseInt(String.valueOf(num.charAt(i)));
        digits[i] = cur;
    }
    return digits;
}

int sum(int[] digits) {
    int result = Arrays.stream(digits).reduce(0, (a,b) -> a+b);
    return result;
}
