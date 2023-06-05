/**
 * Given a string, find the shortest possible string which can be achieved by
 * adding characters to the end of initial string to make it a palindrome.
 * 
 * Example:
 * For st = "abcdc", the output should be solution(st) = "abcdcba".
 *
 * [execution time limit] 3 seconds (java)
 * [input] string st
 * 
 * [output] string
 * 
 * Tests passed: 22/22.
 */
String solution(String st) {
    String process = "";
    String result = "";
    
    if (st.equals(new StringBuilder(st).reverse().toString())) {
        return st;
    }
    
    for (int i = 0; i < st.length(); i++) {
        process += st.charAt(i);
        String reverse = new StringBuilder(process).reverse().toString();
        String check = st.concat(reverse);

        if (check.equals(new StringBuilder(check).reverse().toString())) {
            result = check;
            break;
        }
    }
    return result;
}
