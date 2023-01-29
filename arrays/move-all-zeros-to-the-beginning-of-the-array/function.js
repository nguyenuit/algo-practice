function solveProblem(input){
  let j = parseInt(input.length) - 1;
  let i = parseInt(input.length) - 1;
  while(j >= 0){
    
    if (j!=0){

      if (input[j] != 0){
        j--;
        i--;
      }else{
        input[i] = input[j-1];
        j--;
      }
    }else{
      if (input[j] != 0){
        input[i] = input[j];
        j--;
      }
    }
  }
  
  while(i>=0){
    i--;
    input[i] = 0;
  }

  return input;
}
let input = [1,2,0,3,0,4,7];
let output = solveProblem(input);

console.log(output);
// [0,0,1,2,3,4,7]