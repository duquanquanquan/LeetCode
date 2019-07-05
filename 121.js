let prices = [7,1,5,3,6,4];

let maxProfit = function(prices) {
    if (prices.length === 1) {
        return 0
    }
    let maxValue = 0,
        sellPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < sellPrice) {
            sellPrice = prices[i]
        } else {
            maxValue = Math.max(maxValue, prices[i] - sellPrice)
        }
    }
    return maxValue
};

console.log(maxProfit(prices));