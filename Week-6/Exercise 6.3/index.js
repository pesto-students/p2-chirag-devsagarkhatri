function sortZeroOneTwoArray(N, arr) {
    var zeros = 0;
    var ones = 0;
    var twos = 0;
    for (let i = 0; i < N; i++) {
        if (Number(arr[i]) == Number(1)) {
            ones = ones + 1;
        } else if (Number(arr[i]) == Number(2)) {
            twos = twos + 1;
        } else {
            zeros = zeros + 1;
        }
    }
    for (let i = 0; i < N; i++) {
        if (zeros > 0) {
            zeros = zeros - 1;
            arr[i] = 0;
        } else if (ones > 0) {
            ones = ones - 1;
            arr[i] = 1;
        } else if (twos > 0) {
            twos = twos - 1;
            arr[i] = 2;
        }
    }
    return arr;
}

arr = [0, 1, 0, 1, 1, 1]
n = arr.length;
console.log(sortZeroOneTwoArray(n, arr));

//Time Complexity O(n)
//Space Complexity O(1)
