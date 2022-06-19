function bestTimeToSellStock(arr) {
    buyStock = 0;
    sellStock = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= arr[buyStock]) {
            buyStock = i;
        }
        if (arr[i] > arr[sellStock] && i > buyStock) {
            sellStock = i;
        }
    }

    if (sellStock - buyStock > 0) {
        console.log("buy on day ", buyStock + 1, " at Rs.", arr[buyStock]);
        console.log("sell on day ", sellStock + 1, " at Rs.", arr[sellStock]);
    }

    return ((sellStock - buyStock) > 0 ? (arr[sellStock] - arr[buyStock]) : 0);
}
arr = [1, 2, 3, 8, 4, 7];
console.log(bestTimeToSellStock(arr));
//Time Complexity O(n)
//Space Complexity O(1)
