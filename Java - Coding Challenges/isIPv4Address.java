/**
 * An IP address is a numerical label assigned to each device (e.g., computer, printer)
 * participating in a computer network that uses the Internet Protocol for communication.
 * There are two versions of the Internet protocol, and thus two versions of addresses.
 * One of them is the IPv4 address.
 * 
 * Given a string, find out if it satisfies the IPv4 address naming rules.
 * 
 * Example:
 * For inputString = "172.16.254.1", the output should be solution(inputString) = true;
 * 
 * [execution time limit] 3 seconds (java)
 * [input] string inputString
 * 
 * [output] boolean
 * true if inputString satisfies the IPv4 address naming rules, false otherwise.
 * 
 * Tests passed: 41/41.
 */
boolean solution(String inputString) {
    Pattern digitsAndDot = Pattern.compile("[0-9.]*$"); // begins and ends with 0-9 and dot.
    Pattern beginsZero = Pattern.compile("^[0][0-9]$"); // begins with 0, ends with 0-9.
    Pattern digits = Pattern.compile("[0-9]*$"); // all 0-9.
    String[] splitNums = inputString.split("[.]");
    ArrayList<String> processed = new ArrayList<String>();
    String result = "";
    
    if ((splitNums.length < 4) || (splitNums.length) > 4) {
        return false;
    }
    
    for (String i : splitNums) {
        if ((beginsZero.matcher(i).matches()) && (i.length() > 1)) {
            return false;
        }
        
        // pattern match digits, we have an i, i is <= length 3 for up to 255 and to avoid long ints.
        if ((digits.matcher(i).matches()) && (i.length() > 0) && (i.length() <= 3)) {     
            if ((Integer.parseInt(i) >= 0) && (Integer.parseInt(i) <= 255)) {
                processed.add(i);
            }
        }

        if (processed.size() == splitNums.length) {
            result = String.join(".", processed);
        }
    }
    return ((digitsAndDot.matcher(result).matches()) && (result.length() > 0))? true : false;
}
