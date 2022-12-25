let input = [1, 2, 3, 4, 3, 2, 1, 2, 5];

function calMaxProfit(input){
	let i;
  let j;
  let sell = 0;
  let sell_index = 0;
  for (i=1; i < input.length ; i++){
  	console.log(input[i]);
  	if (input[i] > sell){
    	sell = input[i];
      /* console.log('sell check...', sell) */;
      sell_index = i;
    }
  }
  
  let buy = input[0];
  /* console.log(i) */;
  for (j = 1; j < sell_index ; j++){
  	/* console.log('j', j) */;
  	if (input[j] < buy){
    	buy = input[j];
    }
  }
  return {buy, sell};
}
let result = calMaxProfit(input);

console.log('result', result);

