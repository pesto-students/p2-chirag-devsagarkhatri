function maxSumContigiousArray(arr) {
    var maxSum = 0
    var tempSum = 0;
    let count = 0;
    //Check if are are negative
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) count++;
    }
    if (count == arr.length) {
        arr = arr.sort((a, b) => b - a);
        console.log(arr);
        return arr[0];
    }
    // If it is has positive nu bers also
    for (let i = 0; i < arr.length; i++) {
        tempSum = arr[i] + tempSum;
        maxSum = (maxSum < tempSum) ? tempSum : maxSum;
        tempSum = tempSum < 0 ? 0 : tempSum;
    }
    return maxSum;
}

arr = [-10, 2, 3, -2];
console.log(maxSumContigiousArray(arr));
//Time Complexity O(n)
//Space Complexity O(1)
