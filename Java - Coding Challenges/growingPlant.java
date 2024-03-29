/**
 * Caring for a plant can be hard work, but since you tend to it regularly,
 * you have a plant that grows consistently. Each day, its height increases by
 * a fixed amount represented by the integer upSpeed. But due to lack of sunlight,
 * the plant decreases in height every night, by an amount represented by downSpeed.
 * 
 * Since you grew the plant from a seed, it started at height 0 initially. Given an integer
 * desiredHeight, your task is to find how many days it'll take for the plant to reach this height.
 * 
 * Example:
 * For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
 * solution(upSpeed, downSpeed, desiredHeight) = 10.
 * The plant first reaches a height of 910 on day 10.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] integer upSpeed
 * [input] integer downSpeed
 * [input] integer desiredHeight
 * 
 * [output] integer
 * 
 * Tests passed: 10/10.
 */
int solution(int upSpeed, int downSpeed, int desiredHeight) {
    int day = upSpeed;
    int night = upSpeed - downSpeed;
    int nextDay = day + night;
    ArrayList<Integer> days = new ArrayList<Integer>();
    days.add(day);
    days.add(night);
    
    if (desiredHeight < day) {
        return 1;
    }
    
    if (desiredHeight < nextDay) {
        return 2;
    }
    
    while (desiredHeight > nextDay) {
        nextDay += (night);
        days.add(nextDay);
    }
    return days.size();
}
