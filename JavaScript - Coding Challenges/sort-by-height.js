/**
 * Some people are standing in a row in a park. There are trees between them which cannot be moved.
 * Your task is to rearrange the people by their heights in a non-descending order without moving
 * the trees (-1).
 * 
 * Example:
 * For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
 * solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer a
 * 
 * [output] array.integer
 * Sorted array a with all the trees untouched.
 * 
 * Tests passed: 12/12.
 */
function solution(a) {
    const sortInput = [...a].sort((x, y) => x - y).filter((t) => t !== -1); // elements of a, sort ascending, filter to not sort if a -1.
    let   sortedIndex = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) continue; // skip to preserve the -1 indexes.
        else {
            a[i] = sortInput[sortedIndex++];
        }
    }
    return a;
}