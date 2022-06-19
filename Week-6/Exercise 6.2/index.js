/**
 * 01 02 03 04
 * 05 06 07 08
 * 09 10 11 12
 * 13 14 15 16
 * 
 * 
 * 01 02 03 04, 08 12 16, 15 14 13, 09 05, 06 07, 11, 10
 * ------------------------------------------------------
 * 00 01 02 03, 13 23 33, 32 31 30, 20 10, 11 12, 22, 21 
 * ------------------------------------------------------
 */

function spiralArray(arr) {
    let [rowStart, colStart, rowEnd, colEnd] = [0, 0, arr.length - 1, arr[0].length - 1];
    let linearArr = [];
    while (rowStart < rowEnd || colStart < colEnd) {
        for (let i = colStart; i < colEnd; i++) {
            linearArr.push(arr[rowStart][i]);
        }
        for (let i = rowStart; i < rowEnd; i++) {
            linearArr.push(arr[i][colEnd]);
        }
        for (let i = colEnd; i > colStart; i--) {
            linearArr.push(arr[rowEnd][i]);
        }
        for (let i = rowEnd; i > rowStart; i--) {
            linearArr.push(arr[i][colStart]);
        }
        rowStart++;
        colStart++;
        rowEnd--;
        colEnd--;
    }
    return linearArr;
}
arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
console.log(spiralArray(arr));
// time complexity O(n^2)
// space complexity O(n)
