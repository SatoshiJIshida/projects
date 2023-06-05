/**
 * We define the middle of the array arr as follows:
 * if arr contains an odd number of elements, its middle is the element whose index number
 * is the same when counting from the beginning of the array and from its end;
 * if arr contains an even number of elements, its middle is the sum of the two elements whose
 * index numbers when counting from the beginning and from the end of the array differ by one.
 * An array is called smooth if its first and its last elements are equal to one another and to
 * the middle. Given an array arr, determine if it is smooth or not.
 * 
 * Example:
 * For arr = [7, 2, 2, 5, 10, 7], the output should be solution(arr) = true.
 * The first and the last elements of arr are equal to 7,
 * and its middle also equals 2 + 5 = 7. Thus, the array is smooth and the output is true.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer arr
 * 
 * [output] boolean
 * true if arr is smooth, false otherwise.
 * 
 * Tests passed: 22/22.
 */ 
function solution(arr) {
    if ((arr[0] === arr[arr.length-1])) {
        if ((arr[arr.length/2-1] + arr[arr.length/2]) === arr[0]) {
            return true;
        }
        if (arr[Math.floor(arr.length/2)] === arr[0]) {
            return true;
        }
        return false;
    } else {
        return false
    }
}