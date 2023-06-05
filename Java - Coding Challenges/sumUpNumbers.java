/**
 * CodeMaster has just returned from shopping. He scanned the check of the items he bought
 * and gave the resulting string to Ratiorg to figure out the total number of purchased items.
 * Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums
 * up all the numbers which appear in the given input.
 * 
 * Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.
 * 
 * Example:
 * For inputString = "2 apples, 12 oranges", the output should be
 * solution(inputString) = 14.
 *
 * [execution time limit] 3 seconds (java)
 * [input] string inputString
 * 
 * [output] integer
 * 
 * Tests passed: 15/15.
 */
int solution(String inputString) {
    String[] nums = {"0","1","2","3","4","5","6","7","8","9"};
    String minus = "-";
    ArrayList<Integer> extractNums = new ArrayList<Integer>();
    String processNum = "";
    int result = 0;
    inputString = inputString.concat(" ");
    
    for (int i = 0; i < inputString.length(); i++) {
        if (String.valueOf(inputString.charAt(i)) == minus) {
            processNum = minus.concat(processNum);
        }
        if (Arrays.asList(nums).contains(String.valueOf(inputString.charAt(i)))) {
            processNum += inputString.charAt(i);
            if (!Arrays.asList(nums).contains(String.valueOf(inputString.charAt(i+1)))) {
                extractNums.add(Integer.parseInt(processNum));
                processNum = "";
            }
        }
    }
    
    if (extractNums.size() > 0) {
        result = extractNums.stream().reduce(0, (a,b) -> a+b);
        return result;
    }
    return result;
}
