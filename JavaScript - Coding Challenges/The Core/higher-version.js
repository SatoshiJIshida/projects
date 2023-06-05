/**
 * Given two version strings composed of several non-negative decimal
 * fields separated by periods ("."), both strings contain equal number
 * of numeric fields. Return true if the first version is higher than the
 * second version and false otherwise.
 * 
 * The syntax follows the regular semver ordering rules:
 * 1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2 < 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0
 * There are no leading zeros in any of the numeric fields, i.e. you do not have to handle
 * inputs like 100.020.003 (it would instead be given as 100.20.3).
 * 
 * Example:
 * For ver1 = "1.2.2" and ver2 = "1.2.0", the output should be
 * solution(ver1, ver2) = true;
 * 
 * For ver1 = "1.0.5" and ver2 = "1.1.0", the output should be
 * solution(ver1, ver2) = false.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string ver1
 * [input] string ver2
 * 
 * [output] boolean
 * 
 * Tests passed: 22/22.
 */
function solution(ver1, ver2) {
    let result;
    ver1 = ver1.split('.');
    ver2 = ver2.split('.');
    
    const process = ((i) => {
        if (parseInt(ver1[i]) > parseInt(ver2[i])) {
            return true;
        } else if (parseInt(ver1[i]) < parseInt(ver2[i])) {
            return false;
        } else if ((parseInt(ver1[i]) === parseInt(ver2[i])) && (i === ver1.length-1)) {
            return false;
        }
    });
    for (let i = 0; i < ver1.length; i++) {
        result = process(i);
        if (result === true) {
            return true;
        } else if (result === false) {
            return false;
        }
    }
}