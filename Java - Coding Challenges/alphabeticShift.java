/**
 * Given a string, your task is to replace each of its characters by the next one
 * in the English alphabet; i.e. replace a with b, replace b with c,
 * etc (z would be replaced by a).
 * 
 * Example:
 * For inputString = "crazy", the output should be solution(inputString) = "dsbaz".
 * 
 * [execution time limit] 3 seconds (java)
 * [input] string inputString
 * 
 * [output] string
 * The resulting string after replacing each of its characters.
 * 
 * Tests passed: 10/10.
 */
String solution(String inputString) {
    String[] split = inputString.split("");
    String[] alphabet = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};

    for (int i = 0; i < split.length; i++) {
        // if z, wrap to a.
        if (split[i].equals(alphabet[alphabet.length-1])) {
           split[i] = alphabet[0];
        } else {
            // otherwise +1 char.
            int ref = Arrays.asList(alphabet).indexOf(split[i]);
            if (ref < alphabet.length-1) {
                split[i] = alphabet[ref+1];
            }
        }
    }
    return String.join("", split);
}
