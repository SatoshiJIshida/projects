/**
 * Given a year, return the century it is in. The first century spans from the year 1 up to and
 * including the year 100, the second - from the year 101 up to and including the year 200, etc.
 * 
 * Example:
 * For year = 1905, the output should be solution(year) = 20;
 *
 * [execution time limit] 3 seconds (java)
 * [input] integer year
 * 
 * [output] integer
 * The number of the century the year is in.
 * 
 * Tests passed: 18/18.
 */
int solution(int year) {
    double result = 0;
    result = Math.ceil((double)year / 100);
    return (int)result;
}
