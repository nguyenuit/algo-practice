// # Search a Rotated Array
// Search for a given number in a sorted array that has been rotated by some arbitrary number.

// ## Statement
// We’re given a sorted integer array, nums and an integer value, target. The array is rotated by some arbitrary number.
// Search the target in this array. If the target does not exist then return -1.

// ### Sample input
// nums = [6, 7, 1, 2, 3, 4, 5]
// target = 3
// Expected output
// 4

function solveProblem(nums, target){
    let start = 0
    let end = nums.length - 1;

    while(start <= end){
        let mid = start + Math.round((end-start) / 2);

        if (nums[mid] == target) return mid;

        if (nums[start] <= nums[mid]){
            if (nums[start] <= target && target < nums[mid]){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }else{
            if (nums[mid] < target && target <= nums[end]){
                start = mid + 1;
            }
            else{
                end = mid - 1;
            }
        }
    }

    return -1;
}

const input = [6, 7, 1, 2, 3, 4, 5];
const target = 5;
const output = solveProblem(input, target);
console.log(output);
