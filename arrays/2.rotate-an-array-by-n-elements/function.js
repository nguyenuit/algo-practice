// # Rotate an Array by N Elements
// Given an integer array, rotate it by 'n' elements.

// ## Statement
// We’re given an array of integers, nums. Rotate the array by n elements, where n is an integer:
// For positive values of n, perform a right rotation.
// For negative values of n, perform a left rotation.
// Make sure we make changes to the original array.

// ### Sample input
// nums = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40]
// n = 2
// Expected output
// [9, 40, 1, 10, 20, 0, 59, 86, 32, 11]

function reverseArray(nums, start, end){
    while(start < end){
        let tmp  = nums[start];
        nums[start] = nums[end];
        nums[end] = tmp;
        start++;
        end--;
    }

    return nums;
}

function solveProblem(nums, n){
    if (n > nums.length){
        n = n % nums.length;
    }

    if(n < 0){
        n = n + nums.length;
    }

    nums = reverseArray(nums, 0, nums.length - 1);
    nums = reverseArray(nums, 0, n - 1);
    nums = reverseArray(nums, n, nums.length - 1);

    return nums;
}

let input = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
let n = 11;
let output = solveProblem(input, n);
console.log(output);