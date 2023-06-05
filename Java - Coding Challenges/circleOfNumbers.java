/**
 * Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the
 * distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
 * Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
 * 
 * Example:
 * For n = 10 and firstNumber = 2, the output should be solution(n, firstNumber) = 7
 * 
 * [execution time limit] 3 seconds (java)
 * [input] integer n
 * [input] integer firstNumber
 * 
 * [output] integer
 * 
 * Tests passed: 14/14.
 */
int solution(int n, int firstNumber) {
    int calc = 0;
    
    if (firstNumber > n/2) {
        calc = firstNumber - (n/2);
    }
    if (firstNumber <= n/2) {
        calc = firstNumber + (n/2);
    }
    if (firstNumber == n/2) {
        calc = firstNumber - (n/2);
    }
    return calc;
}
