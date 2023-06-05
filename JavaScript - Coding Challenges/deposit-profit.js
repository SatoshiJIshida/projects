/**
 * You have deposited a specific amount of money into your bank account.
 * Each year your balance increases at the same growth rate.
 * With the assumption that you don't make any additional deposits,
 * find out how long it would take for your balance to pass a specific threshold.
 * 
 * Example:
 * For deposit = 100, rate = 20, and threshold = 170, the output should be
 * solution(deposit, rate, threshold) = 3.
 * year 0: 100;
 * year 1: 120;
 * year 2: 144;
 * year 3: 172.8.
 * Thus, it will take 3 years for your balance to pass the threshold.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer deposit, integer rate, integer threshold
 * 
 * [output] integer
 * The number of years it would take to hit the threshold.
 * 
 * Tests passed: 10/10.
 */ 
function solution(deposit, rate, threshold) {
    let count = 0;
    while (deposit < threshold) {
        deposit += deposit*(rate/100);
        count++;
    }
    return count;
}