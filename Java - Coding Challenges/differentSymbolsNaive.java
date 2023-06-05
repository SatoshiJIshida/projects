/**
 * Given a string, find the number of different characters in it.
 * 
 * Example:
 * For s = "cabca", the output should be solution(s) = 3.
 * There are 3 different characters a, b and c.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] string s
 * 
 * [output] integer
 * 
 * Tests passed: 10/10.
 */
int solution(String s) {
    String[] input = s.split("");
    HashMap<String, Boolean> map = new HashMap<String, Boolean>();
    
    for (int i = 0; i < input.length; i++) {
        boolean isKey = false;
        Iterator<Map.Entry<String, Boolean>> iterator = map.entrySet().iterator();
        
        while (iterator.hasNext()) {
            Map.Entry<String, Boolean> entry = iterator.next();
            if (input[i] == entry.getKey()) {
                isKey = true;
            }
        }
        
        if (!isKey) {
            map.put(input[i], true);
        } else {
            map.put(input[i], false);
        }
    }
    return map.size();
}
