/**
 * Correct variable names consist only of English letters,
 * digits and underscores and they can't start with a digit.
 * 
 * Check if the given string is a correct variable name.
 * 
 * Example:
 * For name = "var_1__Int", the output should be solution(name) = true;
 * 
 * [execution time limit] 3 seconds (java)
 * [input] string name
 * 
 * [output] boolean
 * true if name is a correct variable name, false otherwise.
 * 
 * Tests passed: 20/20.
 */
boolean solution(String name) {
    Pattern variable = Pattern.compile("[a-zA-Z_0-9]*$");
    Pattern digit = Pattern.compile("[0-9]*$");
    Pattern whiteSpace = Pattern.compile("\\s");
    String[] input = name.split("");
    
    // can't begin with digit.
    if (digit.matcher(input[0]).matches()) {
        return false;
    }
    
    // no white space.
    if (whiteSpace.matcher(name).find()) {
        return false; 
    }
    
    // must be alphanumeric and _.
    for (int i = 0; i < input.length; i++) {
        if (!variable.matcher(input[i]).matches()) {
            return false;
        }
    }
    return true;
}
