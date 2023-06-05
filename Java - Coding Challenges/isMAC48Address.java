/**
 * A media access control address (MAC address) is a unique identifier assigned to network
 * interfaces for communications on the physical network segment.
 * 
 * The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is
 * six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens
 * (e.g. 01-23-45-67-89-AB).
 * 
 * Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.
 * 
 * Example:
 * For inputString = "00-1B-63-84-45-E6", the output should be
 * solution(inputString) = true;
 *
 * [execution time limit] 3 seconds (java)
 * [input] string inputString
 * 
 * [output] boolean
 * true if inputString corresponds to MAC-48 address naming rules, false otherwise.
 * 
 * Tests passed: 20/20.
 */
boolean solution(String inputString) {
    Pattern hex = Pattern.compile("[0-9A-F-]*$");
    char check = inputString.charAt(inputString.length()-1);
    
    return ((inputString.length() == 17) && (hex.matcher(inputString).matches()) && (check != '-')) ? true : false;
}
