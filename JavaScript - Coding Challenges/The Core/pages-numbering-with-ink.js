/**
 * You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism 
 * in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to
 * determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page
 * is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only
 * for two digits then this page will not be considered numbered).
 * 
 * It's guaranteed that you can number the current page, and that you can't number the last one in the book.
 * 
 * Example:
 * For current = 1 and numberOfDigits = 5, the output should be
 * solution(current, numberOfDigits) = 5.
 * The following numbers will be printed: 1, 2, 3, 4, 5.
 * 
 * For current = 21 and numberOfDigits = 5, the output should be
 * solution(current, numberOfDigits) = 22.
 * The following numbers will be printed: 21, 22.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer current
 * [input] integer numberOfDigits
 * 
 * [output] integer
 * The last printed page number.
 * 
 * Tests passed: 14/14.
 */
function solution(current, numberOfDigits) {
    let checker = ''+current;
    for (let i = 1; i <= numberOfDigits; i++) {
        let counter = current;
        counter += i;
        checker += counter;
        if (checker.length === numberOfDigits || counter.toString().length > 1 && checker.length === (numberOfDigits-1)) {
            return counter;
        }
    }
    return current;
}