// # Move All Zeros to the Beginning of the Array
// Move all zeros to the left of an array while maintaining its order.

// ## Statement
// We’re given an integer array, nums. Move all zeroes, if any, to the left while maintaining the order of other elements in the array.
// All changes must be made in nums itself; no return value is expected.

// ### Sample input
// [1, 10, 20, 0, 59, 63, 0, 88, 0]
// Expected output
// [0, 0, 0, 1, 10, 20, 59, 63, 88]

function solveProblem(nums){
  let read = parseInt(nums.length) - 1;
  let write = parseInt(nums.length) - 1;

  while(read >= 0){
    if (nums[read] != 0){
      nums[write] = nums[read];
      read--;
      write--;
    }else{
      read--;
    }
  }

  while(write >= 0){
    nums[write] = 0;
    write--;
  }

  return nums;
}
const input = [1, 10, 20, 0, 59, 63, 0, 88, 0];
const output = solveProblem(input);
console.log(output);
