/**
 * Given array of integers, for each position i, search among the previous positions for the last (from the left) 
 * position that contains a smaller value. Store this value at position i in the answer. If no such value can be 
 * found, store -1 instead.
 * 
 * Example
 * For items = [3, 5, 2, 4, 5], the output should be
 * solution(items) = [-1, 3, -1, 2, 4].
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer items
 * 
 * [output] array.integer
 * Array containing answer values computed as described above.
 * 
 * Tests passed: 11/11.
 */
function solution(items) {
   const result = [];
   
   for (let i = 0; i < items.length; i++) {
       let found = false;
       for (let j = i - 1; j >= 0; j--) {
           if (items[j] < items[i]) {
               result.push(items[j]);
               found = true;
               break;
           }
       }
       if (!found) {
           result.push(-1);
       }
   }
   
   return result;
}
