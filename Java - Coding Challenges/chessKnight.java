/**
 * Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
 * 
 * Example:
 * For cell = "a1", the output should be
 * solution(cell) = 2.
 *
 * [execution time limit] 3 seconds (java)
 * [input] string cell
 * 
 * [output] integer
 * 
 * Tests passed: 20/20.
 */
int solution(String cell) {
    String[] letters = {"a","b","c","d","e","f","g","h"};
    int count = 0;
    
    // Vertical Up Right.
    if ((Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))+1 >= 0 && Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))+1 <= letters.length-1) && (Character.getNumericValue(cell.charAt(1))+2 <= 8) ) {
        System.out.println("1");
        count++;
    }
    
    // Vertical Up Left.
    if ((Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))-1 >= 0) && (Character.getNumericValue(cell.charAt(1))+2 <= 8) ) {
        System.out.println("2");
        count++;
    }
    
     // Vertical Down Right.
     if ((Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))+1 >= 0 && Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))+1 <= letters.length-1) && (Character.getNumericValue(cell.charAt(1))-2 >= 1)) {
        System.out.println("3");
        count++;
    }
    
    // Vertical Down Left.
    if ((Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))-1 >= 0) && (Character.getNumericValue(cell.charAt(1))-2 >= 1) ) {
        System.out.println("4");
        count++;
    }
    
    // Horizontal Right Up.
    if ((Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))+2 >= 0 && Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))+2 <= letters.length-1) && (Character.getNumericValue(cell.charAt(1))+1 <= 8)) {
        System.out.println("5");
        count++;
    }

    // Horizontal Right Down.
    if ((Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))+2 >= 0 && Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))+2 <= letters.length-1) && (Character.getNumericValue(cell.charAt(1))-1 >= 1)) {
        System.out.println("6");
        count++;
    }
    
    // Horizontal Left Up.
    if ((Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))-2 >= 0) && (Character.getNumericValue(cell.charAt(1))+1 >= 1 && Character.getNumericValue(cell.charAt(1))+1 <= 8) ) {
        System.out.println("7");
        count++;
    }
    
    // Horizontal Left Down.
    if ((Arrays.asList(letters).indexOf(String.valueOf(cell.charAt(0)))-2 >= 0) && (Character.getNumericValue(cell.charAt(1))-1 >= 1)) {
        System.out.println("8");
        count++;
    }
    
    return count;
}
