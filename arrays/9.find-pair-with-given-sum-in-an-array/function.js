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

function solveProblemUnSorted(nums, val){
    if (!nums || nums.length == 0){
        return;
    }

    const handle = [];
    for(let i = 0; i < nums.length; i++){
        if (!handle.includes(val - nums[i])){
            handle.push(nums[i]);
        }else{
            return true;
        }
    }

    return false;
}

const input = [5, 7, 1, 2, 8, 4, 3];
const val = 10;
const output = solveProblemUnSorted(input, val);
console.log(output);
