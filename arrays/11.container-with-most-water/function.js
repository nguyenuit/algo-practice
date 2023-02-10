// # Container with Most Water
// Given an array of the heights of vertical lines, find two lines that,
// together with the horizontal axis, form a container that holds the most water.

// ## Statement
// Given an array of heights, which represents the heights of vertical lines drawn on a graph.
// Find two lines that form a container that holds the most water when combined with the horizontal axis.
// The height of this container will be the shorter of the two lines
// Note: We cannot tilt any water containers.

// ### Sample input
// The array below represents the heights of the vertical lines:
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Expected output
// 49

function solveProblem(nums){
    if (!nums || nums.length == 0){
        return;
    }

    let start = 0;
    let end = nums.length - 1;
    let result = 0;

    while(start < end){
        result = Math.max(result, (end - start) * Math.min(nums[start], nums[end]));

        if (nums[start] <= nums[end]){
            start++;
        }else{
            end--;
        }
    }

    return result;
}

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const output = solveProblem(input);
console.log(output);
