/**
 * Given a string, output its longest prefix which contains only digits.
 * 
 * Example:
 * For inputString = "123aa1", the output should be solution(inputString) = "123".
 * 
 * [execution time limit] 3 seconds (java)
 * [input] string inputString
 * 
 * [output] string
 * 
 * Tests passed: 12/12.
 */
String solution(String inputString) {
    String[] nums = {"0","1","2","3","4","5","6","7","8","9"};
    String[] input = inputString.split("");
    String ret = "";
    
    for (int i = 0; i < input.length; i++) {
        if (Arrays.asList(nums).contains(input[i])) {
            ret += input[i];
        }
        if (!Arrays.asList(nums).contains(input[i])) {
            break;
        }
    }
    return ret;
}
