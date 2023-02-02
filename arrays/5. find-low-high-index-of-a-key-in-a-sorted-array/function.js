// # Find Low/High Index of a Key in a Sorted Array
// Given a sorted array of integers, return the low and high index of the given element.

// ## Statement
// We’re given a sorted array of integers, nums, and an integer value, target.
// Return the low and high index of the given target element.
// If the indexes are not found, return -1.
// Note: The array can contain multiple duplicates with length in millions.

// ### Sample input
// nums = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6]
// target = 5
// Expected output
// Low index: 15
// High index: 17

function findLowIndex(nums, target){
    let start = 0;
    let end = nums.length - 1;
    let mid = start + Math.round((end - start) / 2);

    if (target > nums[end] || target < nums[start]){
        return -1;
    }

    while(start <= end){
    
        mid = start + Math.round((end - start) / 2);
        console.log('mid', mid);
        if (nums[mid] < target){
            // target in right part
            start = mid + 1;
        }else{
            // target in left part or target is mid
            end = mid - 1;
        }
        // console.log(start, mid, end);
    }

    return mid;
}

const input = [1, 1, 2, 3, 5, 5, 5, 5, 5, 6];
const target = 5;
const output = findLowIndex(input, target)
console.log(output);

