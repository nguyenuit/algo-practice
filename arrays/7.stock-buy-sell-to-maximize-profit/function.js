// # Stock Buy Sell to Maximize Profit
// Given a list of stock prices, find the maximum profit with a single buy or sell activity.

// ## Statement
// We’re given an array of daily stock prices (integers for simplicity). Return the buying and selling prices for making the maximum profit.
// The values in the array represent the cost of stock each day.
// As we can buy and sell the stock only once, we need to find the best buy and sell prices that maximize profit (or minimized loss) over a given span of time.
// We need to maximize the profit from a single buy and sell. If we can’t make any profit, we’ll try to minimize the loss.

// ### Sample input
// [7, 1, 5, 3, 6, 4]
// Expected output
// (2, 5)

function calMaxProfit(input){
  let sell = 0;
  let sellIndex = 0;

  for (let i = 1; i < input.length; i++){
  	if (input[i] > sell){
    	sell = input[i];
      sellIndex = i;
    }
  }
  
  let buy = input[0];
  for (let j = 1; j < sellIndex; j++){
  	if (input[j] < buy){
    	buy = input[j];
    }
  }

  return {buy, sell};
}

const input = [1, 2, 3, 4, 3, 2, 1, 2, 5];
const output = calMaxProfit(input);
console.log(output);
