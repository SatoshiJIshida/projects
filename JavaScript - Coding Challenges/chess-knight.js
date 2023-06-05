/**
 * Given a position of a knight on the standard chessboard,
 * find the number of different moves the knight can perform. 
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string cell
 * 
 * [output] integer
 * 
 * Tests passed: 20/20.
 */
function solution(cell) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let   count = 0;
    // vertical up right.
    if ((0 <= letters.indexOf(cell[0]) + 1 && letters.indexOf(cell[0]) + 1 <= letters.length - 1) && (numbers.includes(parseInt(cell[1]) + 2))) {
        count++;
    }
    // vertical up left.
    if ((0 <= letters.indexOf(cell[0]) - 1 && letters.indexOf(cell[0]) - 1 <= letters.length - 1) && (numbers.includes(parseInt(cell[1]) + 2))) {
        count++;
    }
    // vertical down right.
    if ((0 <= letters.indexOf(cell[0]) + 1 && letters.indexOf(cell[0]) + 1 <= letters.length - 1) && (numbers.includes(parseInt(cell[1]) - 2))) {
        count++;
    }
    // vertical down left.
    if ((0 <= letters.indexOf(cell[0]) - 1 && letters.indexOf(cell[0]) - 1 <= letters.length - 1) && (numbers.includes(parseInt(cell[1]) - 2))) {
        count++;
    }
    // horizontal right up.
    if ((0 <= letters.indexOf(cell[0]) + 2 && letters.indexOf(cell[0]) + 2 <= letters.length - 1) && (numbers.includes(parseInt(cell[1]) + 1))) {
        count++;
    }
    // horizontal right down.
    if ((0 <= letters.indexOf(cell[0]) + 2 && letters.indexOf(cell[0]) + 2 <= letters.length - 1) && (numbers.includes(parseInt(cell[1]) - 1))) {
        count++;
    }
    // horizontal left up.
    if ((0 <= letters.indexOf(cell[0]) - 2 && letters.indexOf(cell[0]) - 2 <= letters.length - 1) && (numbers.includes(parseInt(cell[1]) + 1))) {
        count++;
    }
    // horizontal left down.
    if ((0 <= letters.indexOf(cell[0]) - 2 && letters.indexOf(cell[0]) - 2 <= letters.length - 1) && (numbers.includes(parseInt(cell[1]) - 1))) {
        count++;
    }
    return count;
}