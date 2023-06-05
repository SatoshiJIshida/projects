/**
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it.
 * 
 * Example:
 * For -
 * picture = ["abc",
 *            "ded"]
 * the output should be:
 * solution(picture) = ["*****",
 *                      "*abc*",
 *                      "*ded*",
 *                      "*****"]
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.string picture
 * 
 * [output] array.string
 * 
 * Tests passed: 10/10.
 */
String[] solution(String[] picture) {
    String[] pictureFramed = new String[picture.length+2];
    String asterisk = "*";
    String asterisks = "";
    
    for (int i = 0; i < picture.length; i++) {
        asterisks = new String(new char[picture[i].length()+2]).replace("\0", asterisk);
        picture[i] = asterisk.concat(picture[i]);
        picture[i] = picture[i].concat(asterisk);
    }
    
    pictureFramed[0] = asterisks;
    for (int i = 1; i < pictureFramed.length-1; i++) {
        for (int j = 0; j < picture.length; j++) {
            pictureFramed[i] = picture[j];
            i++;
        }
    }
    pictureFramed[pictureFramed.length-1] = asterisks;
    return pictureFramed;
}
