/**
 * Given an integer n, find the minimal k such that
 * k = m! (where m! = 1 * 2 * ... * m) for some integer m;
 * k >= n.
 * In other words, find the smallest factorial which is not less than n.
 * 
 * Example:
 * For n = 17, the output should be
 * solution(n) = 24.
 * 17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * 
 * [output] integer
 * Tests passed: 20/20.
 */
function solution(n) {
    let count = 1,
        result = 0;
    const nums = [count],
          reducer = ((a,b) => a*b);
    while (result < n) {
        count += 1;
        nums.push(count);
        if (n === 1) {
            result = 1;
        } else {
            result = nums.reduce(reducer);
        }
    }
    return result;
}