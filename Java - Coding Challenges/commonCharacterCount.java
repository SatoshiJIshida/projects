/**
 * Given two strings, find the number of common characters between them.
 * 
 * Example:
 * For s1 = "aabcc" and s2 = "adcaa", the output should be solution(s1, s2) = 3.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] string s1
 * [input] string s2
 * 
 * [output] integer
 * 
 * Tests passed: 10/10.
 */
int solution(String s1, String s2) {
    HashMap<Character, Integer> s1Map = new HashMap<Character, Integer>();
    HashMap<Character, Integer> s2Map = new HashMap<Character, Integer>();
    char[] s1Array = s1.toCharArray();
    char[] s2Array = s2.toCharArray();
    
    for (char c : s1Array) {
        if (s1Map.containsKey(c) == false) {
            s1Map.put(c, 1);
        } else {
            s1Map.put(c, s1Map.get(c) + 1);
        }
    }
    
    for (char c : s2Array) {
        if (s2Map.containsKey(c) == false) {
            s2Map.put(c, 1);
        } else {
            s2Map.put(c, s2Map.get(c) + 1);
        }
    }
    
    int count = 0;
    for (Character i : s1Map.keySet()) {
        for (Character j : s2Map.keySet()) {
            if (i == j) {
                if (s1Map.get(i) <= s2Map.get(j)) {
                    count += s1Map.get(i);
                } else if (s1Map.get(i) >= s2Map.get(j)) {
                    count += s2Map.get(j);
                }
            }
        }
    }
    return count;
}
