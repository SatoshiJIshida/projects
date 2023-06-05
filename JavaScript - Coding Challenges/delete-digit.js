/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number. 
 * Example: For n = 152, the output should be solution(n) = 52;
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * 
 * [output] integer
 * 
 * Tests passed: 20/20.
 */
function solution(n) {
    const extract = n.toString(),
          nums = extract.split(''),
          numsAsInts = [],
          checks = [];
    let   ret = 0;
    
    for (let i = 0; i < nums.length; i++) {
        numsAsInts.push(parseInt(nums[i]));
    }
    for (let i = 0; i < numsAsInts.length; i++) {
        const temp = numsAsInts.splice(i, 1);
        checks.push(parseInt(numsAsInts.join('')));
        numsAsInts.splice(i, 0, temp);
    }
    ret = Math.max(...checks);
    return ret;
}