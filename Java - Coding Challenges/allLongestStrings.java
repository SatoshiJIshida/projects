/**
 * Given an array of strings, return another array containing all of its longest strings.
 * 
 * Example:
 * For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
 * solution(inputArray) = ["aba", "vcd", "aba"].
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.string inputArray
 * 
 * [output] array.string
 * Array of the longest strings, stored in the same order as in the inputArray.
 * 
 * Tests passed: 20/20.
 */
String[] solution(String[] inputArray) {
    int elementLength = inputArray[0].length();
    int count = 0;
    
    for (int i = 1; i < inputArray.length; i++) {
        if (inputArray[i].length() > elementLength) {
            elementLength = inputArray[i].length();
        }
    }
    
    for (int i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length() == elementLength) {
            count++;
        }
    }

    String[] longestStrings = new String[count];
    
    for (int i = 0; i < longestStrings.length; i++) { // 2 loops for 2 different lengths.
        for (int j = 0; j < inputArray.length; j++) {
            if ((inputArray[j].length() == elementLength)) {
                longestStrings[i] = inputArray[j];
                i++;
            }
        }
    }
    return longestStrings;
}
