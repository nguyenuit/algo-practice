// # Find the Smallest Common Number
// Given three integer arrays sorted in ascending order, return the smallest number found in all three arrays.

// ## Statement
// We’re given three integer arrays, each sorted in ascending order. Return the smallest number common in all three arrays.
// In case no number is common, return -1.

// ### Sample input
// v1 = [6, 7, 10, 25, 30, 63, 64]
// v2 = [0, 4, 5, 6, 7, 8, 50]
// v3 = [1, 6, 10, 14]
// Expected output
// 6

function solveProblem(v1, v2, v3){
    let i = j = k = 0;

    while (i < v1.length && j < v2.length && k < v3.length){

        if (v1[i] == v2[j] && v2[j] == v3[k]) return v1[i];

        if (v1[i] <= v2[j] && v1[i] <= v3[k]){
            i++;
        }
        else if (v2[j] <= v1[i] && v2[j] <= v3[k]){
            j++;
        }
        else if (v3[k] <= v1[i] && v3[k] <= v2[j]){
            k++;
        }
    }

    return -1;
}
const v1 = [6, 7, 10, 25, 30, 63, 64];
const v2 = [0, 4, 5, 6, 7, 8, 50];
const v3 = [1, 6, 10, 14];
const output = solveProblem(v1,v2,v3);
console.log(output);
