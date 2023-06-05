/**
 * You have deposited a specific amount of money into your bank account.
 * Each year your balance increases at the same growth rate. With the assumption
 * that you don't make any additional deposits, find out how long it would take
 * for your balance to pass a specific threshold.
 * 
 * Example:
 * For deposit = 100, rate = 20, and threshold = 170, the output should be
 * solution(deposit, rate, threshold) = 3.
 * 
 * Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:
 * 
 * year 0: 100;
 * year 1: 120;
 * year 2: 144;
 * year 3: 172.8.
 * Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] integer deposit
 * [input] integer rate
 * [input] integer threshold
 * 
 * [output] integer
 * The number of years it would take to hit the threshold.
 * 
 * Tests passed: 10/10.
 */
int solution(int deposit, int rate, int threshold) {
    int year = 0;
    double depositDouble = (double)deposit;
    
    while (depositDouble < threshold) {
        depositDouble += depositDouble*((double)rate/100);
        year++;
    }
    return year;
}
