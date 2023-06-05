/**
 * A string is said to be beautiful if each letter in the string appears at
 * most as many times as the previous letter in the alphabet within the string;
 * ie: b occurs no more times than a; c occurs no more times than b; etc.
 * Note that letter a has no previous letter.
 * 
 * Given a string, check whether it is beautiful.
 * 
 * Example:
 * For inputString = "bbbaacdafe", the output should be solution(inputString) = true.
 * This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), 
 * so since there aren't any letters that appear more frequently than the previous letter,
 * this string qualifies as beautiful.
 *
 * [execution time limit] 3 seconds (java)
 * [input] string inputString
 * 
 * [output] boolean
 * Return true if the string is beautiful, false otherwise.
 * 
 * Tests passed: 20/20.
 */
boolean solution(String inputString) {
    ArrayList<String> alphabet = new ArrayList<String>();
    int a = "a".codePointAt(0);
    int z = "z".codePointAt(0);

    for (int i = a; i <= z; i++) {
        alphabet.add(String.valueOf(Character.toChars(i)));
    }

    int[] letters = new int[alphabet.size()];
    
    for (int i = 0; i < inputString.length(); i++) {
        letters[alphabet.indexOf(String.valueOf(inputString.charAt(i)))]++;
    }

    for (int i = 0; i < letters.length-1; i++) {
        if (letters[i+1] > letters[i]) {
            return false;
        }
    }
    return true;
}
