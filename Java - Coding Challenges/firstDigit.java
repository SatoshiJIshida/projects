/**
 * Find the leftmost digit that occurs in a given string.
 * 
 * Example:
 * For inputString = "var_1__Int", the output should be solution(inputString) = '1';
 * 
 * [execution time limit] 3 seconds (java)
 * [input] string inputString
 * 
 * [output] char
 * 
 * Tests passed: 11/11.
 */
char solution(String inputString) {
    String[] nums = {"0","1","2","3","4","5","6","7","8","9"};
    char res;
    ArrayList<Character> result = new ArrayList<Character>();
    String[] split = inputString.split("");
    
    for (int i = 0; i < split.length; i++) {
        if (Arrays.asList(nums).contains(split[i])) {
            char[] convert = split[i].toCharArray();
            res = convert[0];
            result.add(res);
        }
    }
    return result.get(0);
}
