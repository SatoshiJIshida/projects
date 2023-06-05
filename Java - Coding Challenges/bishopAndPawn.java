/**
 * Given the positions of a white bishop and a black pawn on the standard chess board,
 * determine whether the bishop can capture the pawn in one move.
 * 
 * Example:
 * For bishop = "a1" and pawn = "c3", the output should be
 * solution(bishop, pawn) = true.
 *
 * [execution time limit] 3 seconds (java)
 * [input] string bishop
 * [input] string pawn
 * 
 * [output] boolean
 * true if the bishop can capture the pawn, false otherwise.
 * 
 * Tests passed: 20/20.
 */
boolean solution(String bishop, String pawn) {
    char[] letters = {'a','b','c','d','e','f','g','h'};
    ArrayList<Character> oddL = new ArrayList<Character>();
    ArrayList<Character> evenL = new ArrayList<Character>();
    
    for (int i = 0; i < letters.length; i++) {
        if (i % 2 == 0) { // odd - flip for i=0. a/c/e/g
            oddL.add(letters[i]);
        }
        if (i % 2 == 1) { // even - flip for i=0. b/d/f/h
            evenL.add(letters[i]);
        }
    }
    
    // if dark square and not in same position.
    if ((oddL.contains(bishop.charAt(0)) && Character.getNumericValue(bishop.charAt(1)) % 2 == 1) || (evenL.contains(bishop.charAt(0)) && Character.getNumericValue(bishop.charAt(1)) % 2 == 0)) {
        if ((oddL.contains(pawn.charAt(0)) && Character.getNumericValue(pawn.charAt(1)) % 2 == 1) || (evenL.contains(pawn.charAt(0)) && Character.getNumericValue(pawn.charAt(1)) % 2 == 0)) {
            if (bishop.charAt(0) != pawn.charAt(0)) {
                return true;
            }
        }
    }
    
    // if light square and not in same position.
    if ((evenL.contains(bishop.charAt(0)) && Character.getNumericValue(bishop.charAt(1)) % 2 == 1) || (oddL.contains(bishop.charAt(0)) && Character.getNumericValue(bishop.charAt(1)) % 2 == 0)) {
        if ((evenL.contains(pawn.charAt(0)) && Character.getNumericValue(pawn.charAt(1)) % 2 == 1) || (oddL.contains(pawn.charAt(0)) && Character.getNumericValue(pawn.charAt(1)) % 2 == 0)) {
            if (bishop.charAt(0) != pawn.charAt(0)) {
                return true;
            }
        }
    }
    return false;
}
