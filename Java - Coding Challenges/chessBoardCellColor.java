/**
 * Given two cells on the standard chess board, determine whether they have the same color or not.
 * 
 * Example:
 * For cell1 = "A1" and cell2 = "C3", the output should be solution(cell1, cell2) = true.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] string cell1
 * [input] string cell2
 * 
 * [output] boolean
 * true if both cells have the same color, false otherwise.
 * 
 * Tests passed: 20/20.
 */
boolean solution(String cell1, String cell2) {
    String[] split1 = cell1.split("");
    String[] split2 = cell2.split("");
    String[] alpha1 = {"A", "C", "E", "G"};
    String[] alpha2 = {"B", "D", "F", "H"}; 
    ArrayList<String> dark = new ArrayList<String>();
    ArrayList<String> light = new ArrayList<String>();

    // Cell 1
    if ((Arrays.asList(alpha2).contains(split1[0])) && (Integer.parseInt(split1[1]) % 2 == 0)) {
        dark.add(String.join("", split1));
    } else if ((Arrays.asList(alpha1).contains(split1[0])) && (Integer.parseInt(split1[1]) % 2 == 1))  {
        dark.add(String.join("", split1));
    } else {
        light.add(String.join("", split1));
    }

    // Cell 2
    if ((Arrays.asList(alpha2).contains(split2[0])) && (Integer.parseInt(split2[1]) % 2 == 0)) {
        dark.add(String.join("", split2));
    } else if ((Arrays.asList(alpha1).contains(split2[0])) && (Integer.parseInt(split2[1]) % 2 == 1))  {
        dark.add(String.join("", split2));
    } else {
        light.add(String.join("", split2));
    }
    return (dark.size() == 2 || light.size() == 2) ? true : false;
}
