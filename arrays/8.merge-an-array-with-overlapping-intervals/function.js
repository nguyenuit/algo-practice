// # Merge an Array With Overlapping Intervals
// Merge overlapping intervals in an array of interval pairs.

// ## Statement
// We’re given an array of interval pairs as input where each interval has a start and end timestamp.
// The input array is sorted by starting timestamps. Merge the overlapping intervals and return a new output array.

// ### Sample input
// intervals = [[1,3],[2,6],[8,10],[15,18]]
// Expected output
// [[1,6],[8,10],[15,18]]

function solveProblem(nums){
    if (!nums || nums.length == 0){
        return;
    }

    const result = [];
    let handle = [];
    for(let i = 0; i< nums.length; i++){
        if (!result.length){
            result.push(nums[i]);
        }else{
            handle = result.pop();
            if (nums[i][0] <= handle[1]){
                result.push([handle[0], nums[i][1]]);
            }else{
                result.push(handle);
                result.push(nums[i]);
            }
        }
    }

    return result;
}

const input = [[1,3],[2,6],[8,10],[15,18]];
const output = solveProblem(input);
console.log(output);
