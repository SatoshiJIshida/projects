/**
 * Given the positions of a white bishop and a black pawn on the standard chess board,
 * determine whether the bishop can capture the pawn in one move.
 * The bishop has no restrictions in distance for each move, but is limited to
 * diagonal movement.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string bishop, string pawn
 * 
 * [output] boolean
 * true if the bishop can capture the pawn, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(bishop, pawn) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
          oddL = [],
          evenL = [];

    for (let i = 0; i < letters.length; i++) {
        if (i % 2 === 0) { // odd / flip for i=0.
            oddL.push(letters[i]); // a,c,e,g.
        }
        if (i % 2 === 1) { // even / flip for i=0.
            evenL.push(letters[i]); // b,d,f,h.
        }
    }
    // dark squares.
    if ((oddL.includes(bishop[0]) && bishop[1] % 2 === 1) || (evenL.includes(bishop[0]) && bishop[1] % 2 === 0)) { // a,c,e,g | 1,3,5,7. b,d,f,h | 2,4,6,8. 
        if ((oddL.includes(pawn[0]) && pawn[1] % 2 === 1) || (evenL.includes(pawn[0]) && pawn[1] % 2 === 0)) {
            if (bishop[0] !== pawn[0]) {
                return true;
            }
        }
    }
    // light squares.
    if ((evenL.includes(bishop[0]) && bishop[1] % 2 === 1) || (oddL.includes(bishop[0]) && bishop[1] % 2 === 0)) { // b,d,f,h | 1,3,5,7. a,c,e,g | 2,4,6,8. 
        if ((evenL.includes(pawn[0]) && pawn[1] % 2 === 1) || (oddL.includes(pawn[0]) && pawn[1] % 2 === 0)) {
            if (bishop[0] !== pawn[0]) {
                return true;
            }
        }
    }
    return false;
}