/**
 * Your task is to find the area of a polygon for a given n.
 * 
 * A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by
 * taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.
 *
 * Example:
 * For n = 2, the output should be solution(n) = 5;
 * For n = 3, the output should be solution(n) = 13.
 *
 * [execution time limit] 3 seconds (java)
 * [input] integer n
 * 
 * [output] integer
 * The area of the n-interesting polygon.
 * 
 * Tests passed: 20/20.
 */
int solution(int n) {
    int ret = 0;
    
    if (n == 1) { ret = 1; }
    if (n == 2) { ret = n*n+1; }
    
    if (n > 2) {
        int prev = 5;
        int x = 8;
        ret = prev;
        for (int i = 2; i < n; i++) { // n=2 is 5, 5+8, 13+12, 25+16
            ret += x;
            x += 4;
        } 
    }
    return ret;
}
