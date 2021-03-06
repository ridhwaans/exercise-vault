"""
Daily Coding Problem: Problem #1

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
"""

def sum_exists_iterative(numbers, total):
    # range's upper limit is upper minus 1 
    for i in range(0,len(numbers)):
        for j in range(0, len(numbers)):
            print j
            if i == j:
                pass # dont consider summing the same number
            elif numbers[i] + numbers[j] == total:
                return True
    return False

'''
Time complexity is O(n^2)
'''

def sum_exists_helper(numbers, total, k):
    # total is sum, and k is the last element
    # if sum is found
    if total == 0:
        return True
    # Reached end of list
    if k < 0:
        return False
    if (numbers[k] < total):
        # include the last element by subtracting from sum
        sum_exists_helper(numbers, total - numbers[k], k-1) 
    else: # dont include
        sum_exists_helper(numbers, total, k-1)
    return False

def sum_exists_recursive(numbers, total):
    k = len(numbers)-1
    return sum_exists_helper(numbers,total,k)

print sum_exists_recursive([15,10,3,7], 17)
print sum_exists_recursive([15,10,3,7], 12)
'''
Time complexity is O(2^n). Solves a problem of size N by recursively solving two smaller problems of size N-1
Space complexity is O(1)

See also:
https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
https://www.youtube.com/watch?v=nqlNzOcnCfs
https://www.techiedelight.com/subset-sum-problem/
https://wsvincent.com/javascript-two-sum-find-all-pairs-match-target-value/
'''