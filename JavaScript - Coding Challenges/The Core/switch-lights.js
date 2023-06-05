/**
 * N candles are placed in a row, some of them are initially lit.
 * For each candle from the 1st to the Nth the following algorithm
 * is applied: if the observed candle is lit then states of this candle
 * and all candles before it are changed to the opposite. Which candles
 * will remain lit after applying the algorithm to all candles in the order
 * they are placed in the line?
 * 
 * Example:
 * For a = [1, 1, 1, 1, 1], the output should be
 * solution(a) = [0, 1, 0, 1, 0].
 * 
 * For a = [0, 0], the output should be
 * solution(a) = [0, 0].
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer a
 * 
 * [output] array.integer
 * 
 * Tests passed: 20/20.
 */
function solution(a) {
    let position = 0;

    const states = ((position) => {
        for (let n = 0; n <= position; n++) {
            if (a[n] === 1) {
                a[n] = 0;
            } else if (a[n] === 0) {
                a[n] = 1;
            }
        } 
    });

    for (let i = 0; i < a.length; i++) {
        if (a[i] === 1) {
            position = i;
            states(position);
        } else if (a[i] === 0) {
            continue;
        }
    }
    return a;
}