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

    while (low <= high){
        
        let mid = Math.round((low + high) / 2);

        if (target == nums[mid]) return mid;

        if (target > nums[mid]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }

    return -1;
}

const nums = [1,3,9,10,12]
const target = 12
const result = binarySearch(nums, target)
console.log(result);
