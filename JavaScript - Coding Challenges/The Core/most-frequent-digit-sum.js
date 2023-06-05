/**
 * A step(x) operation works like this: it changes a number x into x - s(x),
 * where s(x) is the sum of x's digits. You like applying functions to numbers,
 * so given the number n, you decide to build a decreasing sequence of numbers: n,
 * step(n), step(step(n)), etc., with 0 as the last element.
 * 
 * Building a single sequence isn't enough for you, so you replace all elements of
 * the sequence with the sums of their digits (s(x)). Now you're curious as to which
 * number appears in the new sequence most often. If there are several answers, return
 * the maximal one.
 * 
 * Example:
 * For n = 88, the output should be solution(n) = 9.
 * 
 * Here is the first sequence you built: 88, 72, 63, 54, 45, 36, 27, 18, 9, 0;
 * And here is s(x) for each of its elements: 16, 9, 9, 9, 9, 9, 9, 9, 9, 0.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * 
 * [output] integer
 * 
 * Tests passed: 13/13.
 */
function solution(n) {
    const reducer = ((a,b) => a+b);
    const collect = [],
          check = {};
    let   current = 0,
          next = 0;
    
    current = ''+n;
    current = current.split('');
    current = current.map((el) => parseInt(el));
    next = current.reduce(reducer);
    collect.push(next);
    
    while (n !== 0) {
        n -= next;
        current = ''+n;
        current = current.split('');
        current = current.map((el) => parseInt(el));
        next = current.reduce(reducer);
        collect.push(next);
    }
    
    collect.map((el) => {
        if (!check[el]) {
            check[el] = 1;
        } else if (check[el]) {
            check[el] += 1;
        }
    });
    
    const max = Math.max(...Object.values(check));
    let   result = 0;
    for (let i in check) {
        if (check[i] === max) {
            result = parseInt(i);
        }
    }
    return result;
}