// # Squares of a Sorted Array
// Given a sorted array of integers, return a sorted array of their squares.

// ## Statement
// Given an integer array, sorted in non-decreasing order, return an array of the squares of each number, sorted in non-decreasing order.

// ### Sample input
// [-4, -1, 0, 3, 10]
// Expected output
// [0, 1, 9, 16, 100]

function solveProblem(nums){
    let start = 0;
    let end = nums.length - 1;
    let valStart = 0;
    let valEnd = 0;
    const result = [];

    while(start <= end){
        valStart = Math.pow(nums[start], 2);
        valEnd = Math.pow(nums[end], 2);

        if (valStart > valEnd){
            result.unshift(valStart);
            start++;
        }else{
            result.unshift(valEnd);
            end--;
        }
    }

    return result;
}

const input = [-4, -1, 0, 3, 10];
const output = solveProblem(input);
console.log(output);
