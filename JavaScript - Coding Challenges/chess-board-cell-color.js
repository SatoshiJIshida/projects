/**
 * Given two cells on the standard chess board, determine whether they have the same color
 * or not.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string cell1, string cell2
 * 
 * [output] boolean
 * true if both cells have the same color, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(cell1, cell2) {
    const split1 = cell1.split(''),
          split2 = cell2.split(''),
          alpha1 = ['A', 'C', 'E', 'G'], // case sensitive.
          dark = [],
          light = [];

    // cell 1.
    if (split1[1] % 2 === 1) {
        if (alpha1.includes(split1[0])) {
            dark.push(split1.join(''));
        } else {
            light.push(split1.join(''));
        }
    }

    if (split1[1] % 2 === 0) {
        if (alpha1.includes(split1[0])) {
            light.push(split1.join(''));
        } else {
            dark.push(split1.join(''));
        }
    }

    // cell 2.
    if (split2[1] % 2 === 1) {
        if (alpha1.includes(split2[0])) {
            dark.push(split2.join(''));
        } else {
            light.push(split2.join(''));
        }
    }

    if (split2[1] % 2 === 0) {
        if (alpha1.includes(split2[0])) {
            light.push(split2.join(''));
        } else {
            dark.push(split2.join(''));
        }
    }
    return dark.length === 2 || light.length === 2 ? true : false;
}