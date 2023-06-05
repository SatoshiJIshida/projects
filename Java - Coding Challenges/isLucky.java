/**
 * Ticket numbers usually consist of an even number of digits. A ticket number is considered
 * lucky if the sum of the first half of the digits is equal to the sum of the second half.
 * 
 * Given a ticket number n, determine if it's lucky or not.
 * 
 * Example:
 * For n = 1230, the output should be solution(n) = true;
 * 
 * [execution time limit] 3 seconds (java)
 * [input] integer n
 * 
 * [output] boolean
 * true if n is a lucky ticket number, false otherwise.
 * 
 * Tests passed: 20/20.
 */
boolean solution(int n) {
    String num = Integer.toString(n);
    int sum = 0;
    int halfWay = num.length()/2;
    
    for (int i = 0; i < halfWay; i++) {
        sum += num.charAt(i);
        sum -= num.charAt(i+halfWay);
    }
    return (sum == 0);
}
