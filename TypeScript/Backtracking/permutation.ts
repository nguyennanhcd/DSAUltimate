/*
Coding Exercise ( Permutations)
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

nums = [1,4]

Output :[[1,4],[4,1]]

Example 2:

nums = [1,4,5]

Output: [[1,4,5],[1,5,4],[4,1,5],[4,5,1],[5,1,4],[5,4,1]]
*/

function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    
    function backtrack(start: number) {
        if (start === nums.length - 1) {
            result.push([...nums]);
            return;
        }
        
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Backtrack (swap back)
        }
    }
    
    backtrack(0);
    return result;
}

// Example usage:
console.log(permute([1, 4])); // Output: [[1,4],[4,1]]
console.log(permute([1, 4, 5])); // Output: [[1,4,5],[1,5,4],[4,1,5],[4,5,1],[5,1,4],[5,4,1]]