/**
 * Several people are standing in a row and need to be divided into two teams.
 * The first person goes into team 1, the second goes into team 2, the third goes into team 1 again,
 * the fourth into team 2, and so on.
 * 
 * You are given an array of positive integers - the weights of the people. Return an array of two integers,
 * where the first element is the total weight of team 1, and the second element is the total weight of team 2
 * after the division is complete.
 * 
 * Example:
 * For a = [50, 60, 60, 45, 70], the output should be solution(a) = [180, 105].
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.integer a
 * 
 * [output] array.integer
 * 
 * Tests passed: 10/10.
 */
int[] solution(int[] a) {
    ArrayList<Integer> team1 = new ArrayList<Integer>();
    ArrayList<Integer> team2 = new ArrayList<Integer>();

    for (int i = 0; i < a.length; i++) {
        if (i % 2 == 1) {
            team2.add(a[i]);
        } else {
            team1.add(a[i]);
        }
    }

    int sum1 = 0;
    for (Integer i : team1) {
        sum1 += i;
    }
    
    int sum2 = 0;
    for (Integer i : team2) {
        sum2 += i;
    }
    
    int[] result = {sum1, sum2};
    
    return result;
}
