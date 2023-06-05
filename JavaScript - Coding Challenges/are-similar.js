/**
 * Two arrays are called similar if one can be obtained from another by swapping at most one pair
 * of elements in one of the arrays.
 * Given two arrays a and b, check whether they are similar.
 * 
 * Example:
 * For a = [1, 2, 3] and b = [1, 2, 3], the output should be
 * solution(a, b) = true.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer a, array.integer b
 * 
 * [output] boolean
 * true if a and b are similar, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(a, b) {
    const count = (a, b) => {
        const indexes = [];
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                indexes.push(i);
            }
        }
        return indexes;
    }
    const counts = count(a, b);
    if (counts.length > 2 || counts.length === 1) return false;
    if (counts.length === 0) return true;
    const [count1, count2] = counts;
    
    return a[count1] === b[count2] && a[count2] === b[count1]; // checking if a swap would be the same, but not doing the actual swap to optimise.
}