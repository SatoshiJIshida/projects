/**
 * There are some people and cats in a house. You are given the number of legs they 
 * have all together. Your task is to return an array containing every possible
 * number of people that could be in the house sorted in ascending order.
 * It's guaranteed that each person has 2 legs and each cat has 4 legs.
 * 
 * Example:
 * For legs = 6, the output should be
 * solution(legs) = [1, 3].
 * 
 * There could be either 1 cat and 1 person (4 + 2 = 6) or 3 people (2 * 3 = 6).
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer legs
 * 
 * [output] array.integer
 * 
 * Tests passed: 10/10.
 */
function solution(legs) {
    let   div = 0,
          n = 0;
    const person = 2,
          cat = 4,
          people = legs/person,
          result = [];
          
    if (legs === 0) { return [0]; };
    if (legs === 2) { return [1]; };
    
    if (legs/cat % 1 !== 0) {
        result.unshift(1);
        n = 1;
        while (n < people) {
            n += person;
            result.push(n);
        }
        return result;
    }
    
    if (legs/cat % 1 === 0) {
        result.push(0);
    }
    
    if (legs-cat >= 4) {
        if (result[0] !== 0) {
            result.unshift(0);
        }
        while (n < people) {
            n += person;
            result.push(n);
        }
    }
    
    if (legs/person % 1 === 0) {
        div = legs/person;
        if (div !== result[result.length-1]) {
            result.push(div);
        }
    }
    return result;
}