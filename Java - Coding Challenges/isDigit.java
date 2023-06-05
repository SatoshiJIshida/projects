/**
 * Determine if the given character is a digit or not.
 * 
 * Example:
 * For symbol = '0', the output should be
 * solution(symbol) = true;
 * 
 * For symbol = '-', the output should be
 * solution(symbol) = false.
 *
 * [execution time limit] 3 seconds (java)
 * [input] char symbol
 * 
 * [output] boolean
 * true if symbol is a digit, false otherwise.
 * 
 * Tests passed: 21/21.
 */
boolean solution(char symbol) {
    /**
     * Using pattern matching.
     */
    Pattern nums = Pattern.compile("[0-9]");
    String convert = String.valueOf(symbol);

    return (nums.matcher(convert).matches()) ? true : false;
}

boolean solution(char symbol) {
    /**
     * Iterating.
     */
    String[] nums = {"0","1","2","3","4","5","6","7","8","9"};
    String input = String.valueOf(symbol);
    boolean result = true;
    
    for (int i = 0; i < input.length(); i++) {
        if (!Arrays.asList(nums).contains(String.valueOf(input.charAt(i)))) {
            result = false;
        }
    }
    return result;
}
