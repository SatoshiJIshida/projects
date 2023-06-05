/**
 * We define the middle of the array arr as follows:
 * If arr contains an odd number of elements, its middle is the element whose index number
 * is the same when counting from the beginning of the array and from its end;
 * 
 * If arr contains an even number of elements, its middle is the sum of the two elements whose
 * index numbers when counting from the beginning and from the end of the array differ by one.
 * Given array arr, your task is to find its middle, and, if it consists of two elements, replace
 * those elements with the value of middle. Return the resulting array as the answer.
 * 
 * Example:
 * For arr = [7, 2, 2, 5, 10, 7], the output should be solution(arr) = [7, 2, 7, 10, 7].
 * The middle consists of two elements, 2 and 5. These two elements should be replaced with their sum, i.e. 7.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer arr
 * 
 * [output] array.integer
 * arr with its middle replaced by a single element, or the initial array if the middle consisted of a single 
 * element to begin with.
 * 
 * Tests passed: 18/18.
 */
function solution(arr) {
    let sum = (arr[arr.length/2-1]+arr[arr.length/2]);
    
    for (let i = 0; i < arr.length; i++) {
        if (i === (arr.length/2-1)) {
            arr.splice(i, 2, sum);
            return arr;
        }    
    }

    if (arr.length % 2 === 1) {
        return arr;
    }
}