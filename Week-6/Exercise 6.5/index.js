function pairWithGivenDifference(arr, diff) {
    var diffMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (diffMap.has(diff + arr[i])) {
            return 1;
        }
        diffMap.has(arr[i]) ? diffMap.set(arr[i], diffMap.get(arr[i]) + 1) : diffMap.set(arr[i], 1);
    }
    return 0;
}
arr = [2, 3, 5, 7, 1];
diff = -4;
console.log(pairWithGivenDifference(arr, diff));
//Time Complexity O(n)
//Space Complexity O(n)
