/**
 * Given the total number of rows and columns in a theater (nRows and nCols, respectively),
 * and the row and column you're sitting in, return the number of people who sit strictly 
 * behind you and in your column or to the left, assuming all seats are occupied.
 * 
 * Example:
 * For nCols = 16, nRows = 11, col = 5, and row = 3, the output should be 
 * solution(nCols, nRows, col, row) = 96.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer nCols, integer nRows, integer col, integer row
 * 
 * [output] integer
 * The number of people who sit strictly behind you and in your column or to the left.
 * 
 * Tests passed: 10/10.
 */
function solution(nCols, nRows, col, row) {
    const cols = (nCols - col)+1,
          rows = nRows - row,
          result = cols*rows;
    return result;
}