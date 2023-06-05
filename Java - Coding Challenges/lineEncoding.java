/**
 * Given a string, return its encoding defined as follows:
 * First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
 * for example, "aabbbc" is divided into ["aa", "bbb", "c"]
 * Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
 * for example, substring "bbb" is replaced by "3b"
 * Finally, all the new strings are concatenated together in the same order and a new string is returned.
 * 
 * Example:
 * For s = "aabbbc", the output should be
 * solution(s) = "2a3bc".
 *
 * [execution time limit] 3 seconds (java)
 * [input] string s
 * 
 * [output] string
 * Encoded version of s.
 * 
 * Tests passed: 19/19.
 */
String solution(String s) {
    s = s.concat(" ");
    StringBuilder result = new StringBuilder();
    int counter = 1;
    
    for (int i = 1; i < s.length(); i++) {
        if (s.charAt(i-1) == (s.charAt(i))) {
            counter++;
        } else {
            if (counter > 1) {
                result.append(counter);
                counter = 1;
            }
            // append char here in case we have a single char with no counter.
            result.append(s.charAt(i-1));
        }
    }
    return String.valueOf(result);
}
