/**
 * Let's call two integers A and B friends if each integer from the array divisors
 * is either a divisor of both A and B or neither A nor B. If two integers are
 * friends, they are said to be in the same clan. How many clans are the integers
 * from 1 to k, inclusive, broken into?
 * 
 * Example:
 * For divisors = [2, 3] and k = 6, the output should be solution(divisors, k) = 4.
 * 
 * The numbers 1 and 5 are friends and form a clan, 2 and 4 are friends and form a
 * clan, and 3 and 6 do not have friends and each is a clan by itself. So the numbers 
 * 1 through 6 are broken into 4 clans.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer divisors
 * [input] integer k
 * 
 * [output] integer
 * 
 * Tests passed: 16/16.
 * Sample tests: 8/8
 * Hidden tests: 8/8
 */
function solution(divisors, k) {
    let yes = {},
        no = {};
    for (let n = 1; n <= k; n++) {
        for (let i = 0; i < divisors.length; i++) {
            if ((n/divisors[i]) % 1 === 0 && !yes[n]) {
                yes[n] = ''+divisors[i];
            } else if ((n/divisors[i]) % 1 === 0 && yes[n]) {
                yes[n] += divisors[i];
            } 
            if ((n/divisors[i]) % 1 !== 0 && !no[n]) {
                no[n] = true;
            }
        }
    }
    
    const keysOfYes = Object.keys(yes),
          valuesOfYes = Object.values(yes),
          pairsArray = [],
          singlesArray = [];
    let   pairs = 0,
          singles = 0;
    valuesOfYes.filter((el, i, a) => {
        if ((a.indexOf(el) !== i) && (!pairsArray.includes(el))) {
            pairs++;
            pairsArray.push(el);
        } else if ((a.indexOf(el) === i) && (!singlesArray.includes(el))) {
            singles++;
            singlesArray.push(el);
        }
    });
    for (let i of singlesArray) {
        if (pairsArray.includes(i)) {
            singles--;
        }
    }
    
    for (let i in no) {
        if (keysOfYes.includes(i)) {
            delete no[i];
        }
    }
    const keysOfNo = Object.keys(no);
    // the test requires only 1 pair from non divisible numbers.
    if (keysOfNo.length >= 2) {
        pairs++;
    }
    const total = pairs+singles;
    return total;
}