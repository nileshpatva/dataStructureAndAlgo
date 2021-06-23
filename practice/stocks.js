/**
 * Groupon interview question
 * [100, 180, 260, 380, 40, 550, 650]
 */

function maxProfit(stocks) {
  let buy = 0;
  let sell = 1;
  let max = 0;

  let idx = [];

  while (sell < stocks.length) {
    let profit = stocks[sell] - stocks[buy];
    if (profit > 0) {
      if (idx.length > 0 && idx[idx.length - 1][1] === buy) {
        idx[idx.length - 1][1] = sell;
      } else {
        idx.push([buy, sell]);
      }
      max += profit;
    } 
    buy++;
    sell++;
  }
  console.log({ max, idx });
}

maxProfit([100, 180, 260, 380, 40, 550, 650, 30, 200, 100, 400, 600]);