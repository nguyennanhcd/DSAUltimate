'''
Coding Exercise ( Permutations)
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

nums = [1,4]

Output :[[1,4],[4,1]]

Example 2:

nums = [1,4,5]

Output: [[1,4,5],[1,5,4],[4,1,5],[4,5,1],[5,1,4],[5,4,1]]

'''

def permute(nums):
    def backtrack(start=0):
        # If we've reached the end of the array, we found a permutation
        if start == len(nums):
            result.append(nums[:])
            return
        
        for i in range(start, len(nums)):
            # Swap the current element with the start element
            nums[start], nums[i] = nums[i], nums[start]
            # Recurse with the next element as the start
            backtrack(start + 1)
            # Backtrack: swap back to the original configuration
            nums[start], nums[i] = nums[i], nums[start]
    
    result = []
    backtrack()
    return result
