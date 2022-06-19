function threeSum(arr, target) {
    var targetDiff = 100000;
    var sum = 0;
    var tempSum = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                tempSum = arr[i] + arr[j] + arr[k];
                if (Math.abs(tempSum - target) <= targetDiff) {
                    targetDiff = Math.abs(tempSum - target);
                }
            }
        }
    }
    return (targetDiff + target);
}

arr = [-1, 2, 1, -4];
target = 1;
console.log(threeSum(arr, target));
// Time Complexity O(n^3)
// Space Complexity O(1)
