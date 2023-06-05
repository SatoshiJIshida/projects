/**
 * An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"),
 * an "@" symbol, then a domain part ("example.com").
 * 
 * The domain name part of an email address may only consist of letters, digits, hyphens and dots.
 * The local part, however, also allows a lot of different special characters.
 * 
 * Given a valid email address, find its domain part.
 * 
 * Example:
 * For address = "prettyandsimple@example.com", the output should be
 * solution(address) = "example.com";
 *
 * [execution time limit] 3 seconds (java)
 * [input] string address
 * 
 * [output] string
 * 
 * Tests passed: 20/20.
 */
String solution(String address) {
    int ref = 0;
    String result = "";
    
    for (int i = 0; i < address.length(); i++) {
        if (address.charAt(i) == '@') {
            ref = i+1;
        }
    }
    result = address.substring(ref, address.length());
    return result;
}
