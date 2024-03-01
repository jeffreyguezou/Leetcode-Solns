var maxProfit = function (prices) {
  let current = prices[0];
  let j = 1;
  let profit = 0;
  while (j < prices.length) {
    if (prices[j] > current) {
      profit += prices[j] - current;
      current = prices[j];
    } else {
      current = prices[j];
    }
    j++;
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 2, 1]));
console.log(maxProfit([2, 5, 7, 3, 1, 8, 9, 4, 6, 3, 9]));
