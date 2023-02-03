// # Find Pair With Given Sum in an Array
// Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value.

// ## Statement
// We’re given an array of integers and a value. Determine if there are any two integers in the array whose sum is equal to the given value.
// Return true if the sum exists; otherwise, return false.

// ### Sample input
// This challenge covers both sorted and unsorted arrays.
// [5, 7, 1, 2, 8, 4, 3] 
// val = 3
// Expected output
// True

function solveProblem(nums, val){
    if (!nums || nums.length == 0){
        return;
    }

    let start = 0;
    let end = nums.length - 1;
    let sum = nums[start] + nums[end];
    while(start < end){
        if (sum == val) return true;
        if (sum > val){
            end--;
        }else{
            start++;
        }
        sum = nums[start] + nums[end];
    }
    
    return false;
}

const input = [1, 2, 3, 4, 8, 9, 10];
const val = 18;
const output = solveProblem(input, val);
console.log(output);
