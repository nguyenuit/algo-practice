// # Implement Binary Search on a Sorted Array
// Given a sorted array of integers, return the index of the given value.

// ## Statement
// We are given an array of integers, nums, sorted in ascending order, and an integer value, target.
// If the target exists in the array, return its index. If the target does not exist, then return -1.
// The binary search divides the input array by half at every step.
// After every step, either we find the index we are looking for, or we discard half of the array.

// ### Sample input
// nums = [1, 3, 9, 10, 12]
// target = 9
// Expected output
// 2

function binarySearch(nums, target){

    let low = 0;
    let high = nums.length - 1;
    let middleIndex = Math.round((low + high) / 2);

    while (low <= high){

        let middle = nums[middleIndex];

        if (target == middle) return middleIndex;

        if (target > middle){
            low = middleIndex;
            middleIndex = Math.round((low + high) / 2);
            if (middleIndex == (nums.length - 2)) middleIndex = nums.length - 1;
        }else{
            high = middleIndex;
            middleIndex = Math.round((low + high) / 2);
            if (middleIndex == 1) middleIndex = 0;
        }
    }

    return -1;
}

const nums = [1,3,9,10,12]
const target = 3
const result = binarySearch(nums, target)
console.log(result);
