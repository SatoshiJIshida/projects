/**
 * Some phone usage rate may be described as follows:
 * first minute of a call costs min1 cents,
 * each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
 * each minute after 10th costs min11 cents.
 * You have s cents on your account before the call. What is the duration
 * of the longest call (in minutes rounded down to the nearest integer) you can have?
 * 
 * Example:
 * For min1 = 3, min2_10 = 1, min11 = 2, and s = 20, the output should be
 * solution(min1, min2_10, min11, s) = 14.
 * 
 * the first minute costs 3 cents, which leaves you with 20 - 3 = 17 cents;
 * the total cost of minutes 2 through 10 is 1 * 9 = 9, so you can talk 9 more minutes and still have 17 - 9 = 8 cents;
 * each next minute costs 2 cents, which means that you can talk 8 / 2 = 4 more minutes.
 * Thus, the longest call you can make is 1 + 9 + 4 = 14 minutes long.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer min1, integer min2_10, integer min11, integer s
 * 
 * [output] integer
 * Tests passed: 12/12.
 */
function solution(min1, min2_10, min11, s) {
    let longestCall = 0;
    if (s >= min1) {
        longestCall += 1;
        s -= min1;
    }
    while (s > min2_10 && longestCall < 10) {
        longestCall += 1;
        s -= min2_10;
    }
    const thirdTier = s / min11;
    if (longestCall >= 10 && thirdTier > 0) {
        longestCall += thirdTier;
    }
    return Math.floor(longestCall);
}