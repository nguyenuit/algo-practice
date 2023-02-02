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
// [1, 6]

function calMaxProfit(nums){
  if (!nums || nums.length < 2){
    return;
  }

  let currentBuy = nums[0];
  let globalSell = nums[1];
  let globalProfit = globalSell - currentBuy;
  let currentProfit = 0;
  
  for(let i = 1; i< nums.length; i++){
    currentProfit = nums[i] - currentBuy;

    if (currentProfit > globalProfit){
      globalProfit = currentProfit;
      globalSell = nums[i];
    }

    if (currentBuy > nums[i]){
      currentBuy = nums[i];
    }
  }
  
  return [globalSell - globalProfit, globalSell];
}

const input = [8, 6, 5, 4, 3, 2, 1];
const output = calMaxProfit(input);
console.log(output);
