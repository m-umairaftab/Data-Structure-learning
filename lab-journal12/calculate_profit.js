function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        // Update the minimum price if a smaller price is found
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        // Calculate the profit by comparing the current price with the minimum price
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}

// Example usage
const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log(profit); 
