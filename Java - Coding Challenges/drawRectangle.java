/**
 * You are implementing a command-line version of the Paint app. Since the command line doesn't
 * support colors, you are using different characters to represent pixels. Your current goal is
 * to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left
 * corner at (x1, y1) and a lower right corner at (x2, y2). Here the x-axis points from left to
 * right, and the y-axis points from top to bottom.
 * 
 * Given the initial canvas state and the array that represents the coordinates of the two corners,
 * return the canvas state after the operation is applied. For the details about how rectangles are
 * painted, see the example.
 * 
 * Example
 * For
 * canvas = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
 *           ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
 *           ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
 *           ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
 *           ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
 * 
 * and rectangle = [1, 1, 4, 3], the output should be
 * solution(canvas, rectangle) = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
 *            					  ['a', '*', '-', '-', '*', 'a', 'a', 'a'],
 *            					  ['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
 *            					  ['b', '*', '-', '-', '*', 'b', 'b', 'b'],
 *            					  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
 * 
 * Note that rectangle sides are depicted as -s and |s, asterisks (*) stand for its corners and all
 * of the other "pixels" remain the same.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.array.char canvas
 * [input] array.integer rectangle
 * 
 * [output] array.array.char
 * 
 * Tests passed: 12/12.
 */
char[][] solution(char[][] canvas, int[] rectangle) {
    for (int y = 0; y < canvas.length; y++) {
        for (int x = 0; x < canvas[0].length; x++) {
            if ((x == rectangle[0]) && (y == rectangle[1])) {
                canvas[y][x] = '*';
            }      
            if ((x > rectangle[0]) && (x < rectangle[2]) && (y == rectangle[1])) {
                canvas[y][x] = '-';
            }
            if ((x == rectangle[2]) && (y == rectangle[1])) {
                canvas[y][x] = '*';
            }
            if ((y > rectangle[1]) && (y < rectangle[3]) && (x == rectangle[0])) {
                canvas[y][x] = '|';
            }
            if ((y > rectangle[1]) && (y < rectangle[3]) && (x == rectangle[2])) {
                canvas[y][x] = '|';
            }
            if ((y == rectangle[3]) && (x == rectangle[0])) {
                canvas[y][x] = '*';
            }
            if ((y == rectangle[3]) && (x > rectangle[0]) && (x < rectangle[2])) {
                canvas[y][x] = '-';
            }
            if ((y == rectangle[3]) && (x == rectangle[2])) {
                canvas[y][x] = '*';
            }
        }
    }
    return canvas;
}
