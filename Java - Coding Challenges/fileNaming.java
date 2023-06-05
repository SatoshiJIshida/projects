/**
 * You are given an array of desired filenames in the order of their creation.
 * Since two files cannot have equal names, the one which comes later will have an
 * addition to its name in a form of (k), where k is the smallest positive integer
 * such that the obtained name is not used yet.
 * 
 * Return an array of names that will be given to the files.
 * 
 * Example:
 * For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
 * solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].
 *
 * [execution time limit] 3 seconds (java)
 * [input] array.string names
 * 
 * [output] array.string
 * 
 * Tests passed: 12/12.
 */
String[] solution(String[] names) {
    ArrayList<String> newNames = new ArrayList<String>();
    
    for (int i = 0; i < names.length; i++) {
        String file = names[i];
        int fileExists = newNames.indexOf(file);
        
        if (fileExists > -1) {
            int n = 1;
            for(; newNames.contains(file+"("+n+")");n++){
            }
            file +="("+n+")";
        }
        newNames.add(file);
    }
    String[] result = new String[newNames.size()];
    result = newNames.toArray(result);
    return result;
}
