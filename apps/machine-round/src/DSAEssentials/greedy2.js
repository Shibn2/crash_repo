function optimalStockTrading(prices) {
  let lowestPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    lowestPrice = Math.min(lowestPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - lowestPrice);
  }
  return maxProfit;
}

export default function optimalStockTradingUtil() {
  const a1 = [1, 2, 3, 4];
  console.log(" Optimal stoke trading profit 1 ", optimalStockTrading(a1));
  const a2 = [4, 3, 2, 1];
  console.log(" Optimal stoke trading profit 1 ", optimalStockTrading(a2));
  const a3 = [6, 8, 1, 2, 30, 19];
  console.log(" Optimal stoke trading profit 1 ", optimalStockTrading(a3));
}
