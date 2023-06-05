/**
 * Elections are in progress!
 * Given an array of the numbers of votes given to each of the candidates so far,
 * and an integer k equal to the number of voters who haven't cast their vote yet,
 * find the number of candidates who still have a chance to win the election.
 * 
 * The winner of the election must secure strictly more votes than any other candidate.
 * If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.
 * 
 * Example:
 * For votes = [2, 3, 5, 2] and k = 3, the output should be
 * solution(votes, k) = 2.
 *
 * [execution time limit] 3 seconds (java)
 * [input] array.integer votes
 * [input] integer k
 * 
 * [output] integer
 * 
 * Tests passed: 12/12.
 */
int solution(int[] votes, int k) {
    Integer[] newVotes = Arrays.stream(votes).boxed().toArray( Integer[]::new );
    int max = Arrays.stream(votes).max().getAsInt();
    int occurs = Arrays.asList(newVotes).lastIndexOf(max);
    int count = 0;
    
    for (int i = 0; i < newVotes.length; i++) {
        newVotes[i] += k;
        if (newVotes[i] > max) {
            count++;
        }
        
        if (((k == 0) && (occurs == 0)) || ((k == 0) && (occurs == 1))) {
            return 1;
        }
        
        if ((k == 0) && (occurs > 1)) {
            return 0;
        }
    }
    return count;
}
