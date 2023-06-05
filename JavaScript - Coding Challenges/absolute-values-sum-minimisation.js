/**
 * Given a sorted array of integers a, your task is to determine which element
 * of a is closest to all other values of a. In other words, find the element
 * x in a, which minimizes the following sum:
 * abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
 * 
 * Example:
 * For a = [2, 4, 7], the output should be solution(a) = 4.
 * 
 * for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
 * for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
 * for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
 * 
 * If there are several possible answers, output the smallest one.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer a
 * 
 * [output] integer
 * An integer representing the element from a that minimizes the sum of its absolute
 * differences with all other elements.
 * 
 * Tests passed: 19/19.
 */
function solution(a) {
   const res = [];
   a.forEach(num => {
      const sum = a.reduce((a, b) => {
         return a + Math.abs(b - num);
      }, 0);
      res.push(sum);
   });
   const min = Math.min(...res);
   return a[res.indexOf(min)];
}