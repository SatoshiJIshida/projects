/**
 * Define a word as a sequence of consecutive English letters.
 * Find the longest word from the given string.
 * 
 * Example:
 * For text = "Ready, steady, go!", the output should be
 * solution(text) = "steady".
 *
 * [execution time limit] 3 seconds (java)
 * [input] string text
 * 
 * [output] string
 * The longest word from text. It's guaranteed that there is a unique output.
 * 
 * Tests passed: 10/10.
 */
String solution(String text) {
    String[] input = text.split("[^a-zA-Z]");
    String longest = "";
    
    for (int i = 0; i < input.length; i++) {
        if (input[i].length() > longest.length()) {
            longest = input[i];
        }
    }
    return longest;
}
