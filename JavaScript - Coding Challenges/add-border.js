/**
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it.
 * Example:
 * solution(picture) = ["*****",
 *                      "*abc*",
 *                      "*ded*",
 *                      "*****"]
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.string picture
 * 
 * [output] array.string
 * The same matrix of characters, framed with a border of asterisks of width 1.
 * 
 * Tests passed: 10/10.
 */
function solution(picture) {
    const arr = [],
          asterisk = '*';
    let   asterisks = '';

    for (let i = 0; i < picture.length; i++) {
        asterisks = asterisk.repeat(picture[i].length + 2);
        picture[i] = asterisk.concat(picture[i]);
        picture[i] = picture[i].concat(asterisk);
    }
    arr.push(asterisks);
    arr.push(...picture);
    arr.push(asterisks);

    return arr;
}