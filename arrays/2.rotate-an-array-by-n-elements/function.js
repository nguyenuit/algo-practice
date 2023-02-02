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

function solveProblem(nums, n){
    
    let x = nums.length - n;
    let y = nums.length - 1;

    for (let i = x; i < nums.length - 1; i++){
        let tmp = nums[x];
        nums[x] = nums[y];
        nums[y] = tmp;
        y--;
    }

    y = x - 1;
    for (let i = 0; i < y; i++){
        let tmp = nums[i];
        nums[i] = nums[y];
        nums[y] = tmp;
        y--;
    }

    let nums2 = [];
    for(let i = nums.length -1; i >= 0; i--){
        nums2.push(nums[i]);
    }

    return nums2;
}

let input = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
let n = 2;
let output = solveProblem(input, n);
console.log(output);
