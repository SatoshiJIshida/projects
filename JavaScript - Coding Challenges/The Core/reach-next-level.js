/**
 * You are playing an RPG game. Currently your experience points (XP) total
 * is equal to experience. To reach the next level your XP should be at least
 * at threshold. If you kill the monster in front of you, you will gain more
 * experience points in the amount of the reward.
 * Given values experience, threshold and reward, check if you reach the next
 * level after killing the monster.
 * 
 * Example:
 * For experience = 10, threshold = 15, and reward = 5, the output should be
 * solution(experience, threshold, reward) = true;
 * For experience = 10, threshold = 15, and reward = 4, the output should be
 * solution(experience, threshold, reward) = false.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer experience, integer threshold, integer reward
 * 
 * [output] boolean
 * true if you reach the next level, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(experience, threshold, reward) {
    const XP = experience + reward;
    return XP >= threshold ? true : false;
}