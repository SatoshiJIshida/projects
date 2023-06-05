/**
 * Given the string, check if it is a palindrome.
 *
 * Example:
 * For inputString = "aabaa", the output should be solution(inputString) = true;
 *
 * [execution time limit] 3 seconds (java)
 * [input] string inputString
 * 
 * [output] boolean
 * true if inputString is a palindrome, false otherwise.
 * 
 * Tests passed: 20/20.
 */
boolean solution(String inputString) {
    String reverseString = new StringBuilder(inputString).reverse().toString();
    if (inputString.equals(reverseString)) {
        return true;
    } else {
        return false;
    }
}
