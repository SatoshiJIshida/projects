/**
 * Check if the given string is a correct time representation of the 24-hour clock.
 * 
 * Example:
 * For time = "13:58", the output should be
 * solution(time) = true;
 * For time = "25:51", the output should be
 * solution(time) = false;
 * For time = "02:76", the output should be
 * solution(time) = false.
 *
 * [execution time limit] 3 seconds (java)
 * [input] string time
 * 
 * [output] boolean
 * true if the given representation is correct, false otherwise.
 * 
 * Tests passed: 22/22.
 */
boolean solution(String time) {
    boolean result = false;
    
    int one = Integer.parseInt(time.substring(0,1)); // hours: 10s.
    System.out.println(one);
    int two = Integer.parseInt(time.substring(1,2)); // hours: 1s.
    System.out.println(two);
    int three = Integer.parseInt(time.substring(3,4)); // minutes: 10s.
    System.out.println(three);
    int four = Integer.parseInt(time.substring(4)); // minutes: 1s.
    System.out.println(four);
    
    if ( ((one == 2) && (two >= 0) && (two <= 3)) || ((one >= 0) && (one <= 1)) ) {
        if ((two >= 0) && (two <= 9) && (three >= 0) && (three <= 5) && (four >= 0) && (four <= 9)) {
            result = true;
        }
    }
    return result;
}
