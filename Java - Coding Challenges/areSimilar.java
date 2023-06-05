/**
 * Two arrays are called similar if one can be obtained from another by
 * swapping at most one pair of elements in one of the arrays.
 * 
 * Given two arrays a and b, check whether they are similar.
 * 
 * Example:
 * For a = [1, 2, 3] and b = [2, 1, 3], the output should be solution(a, b) = true.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer a
 * [input] array.integer b
 * 
 * [output] boolean
 * true if a and b are similar, false otherwise.
 * 
 * Tests passed: 20/20.
 */
boolean solution(int[] a, int[] b) {
    ArrayList<Integer> getCount = count(a, b);

    if ((getCount.size() > 2) || (getCount.size() == 1)) { 
        return false; 
    }
    if (getCount.size() == 0) {
        return true;
    }
    return (a[getCount.get(0)] == b[getCount.get(1)]) && (a[getCount.get(1)] == b[getCount.get(0)]);
}

ArrayList<Integer> count(int[] one, int[] two) {
    ArrayList<Integer> indexes = new ArrayList<Integer>();
    
    for (int i = 0; i < one.length; i++) {
        if (one[i] != two[i]) {
            indexes.add(i);
        }
    }
    return indexes;
}
