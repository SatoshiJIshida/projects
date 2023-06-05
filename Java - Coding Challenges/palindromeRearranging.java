/**
 * Given a string, find out if its characters can be rearranged to form a palindrome.
 * 
 * Example:
 * For inputString = "aabb", the output should be solution(inputString) = true.
 * We can rearrange "aabb" to make "abba", which is a palindrome.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] string inputString
 * 
 * [output] boolean
 * true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
 * 
 * Tests passed: 20/20.
 */
boolean solution(String inputString) {
    int maxChars = 256;
    int[] count = new int[maxChars];

    /**
     * Fills the array indexes where char code position is e.g. index 97 is a,
     * if 'a' appears twice, then index 97 is 2.
     */
    for (int i = 0; i < inputString.length(); i++) {
        count[Character.codePointAt(inputString, i)] += 1;
    }

    int odd = 0;
    for (int i = 0; i < count.length; i++) {
        /**
         * bitwise & - 
         * binary version of count[i] compared with '1'
         * if both bits are 1 (1 & 1),
         * then result for that bit is 1.
         * e.g. 0110
         *      0101
         *      ----
         *      0100
         * 128 64 32 16 8 4 2 1 - 8bit binary number.
         * If binary 1 is set, then the number is always odd because every other
         * bit is even 2/4/8/16/32/64/128.
         * Comparing count[i] lowest order 1 with lowest order 1 using '&', if result is 1
         * then you know that the count[i] binary bit for 1 is set and 
         * so it is an odd number.
         */
        if ((count[i] & 1) == 1) { // if odd.
            odd++; // we can have 1 odd.
        }
        if (odd > 1) {
            return false;
        }
    }
    return true; // true if odd is 0 or 1. e.g. eye has 1 odd character count (y), so 1 odd is allowed.
}
