/**
 * Problem 7.5: Next Greater ELement
 *  Given an array arr{} of size N having distinct elements, the task is to find the next
 *  greater element for each element of the array in order of their appearance in the array.
    Next greater element of an element in the array is the nearest element on the right
    which is greater than the current element. If there does not exist next greater of current
    element, then next greater element for current element is -1. 
    
    Example 1:
        Input:
            N = 4, 
            arr[] = [1 3 2 4]
        Output:3 4 4 -1
        Explanation:In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.
 */


function nextGreaterElement(arr, n)
{
    var stack = [];
    let result = new Array(n);

    for (let i = n - 1; i >= 0; i--)
    {
        if (stack.length != 0)
        {
            while (stack.length != 0 && stack[stack.length-1] <= arr[i])
                stack.pop();
            
        }
        result[i] = stack.length == 0 ? -1 : stack[stack.length-1];
        stack.push(arr[i]);
    }
    return result;
}


let arr = [ 1,3,2,4];
let n = arr.length;
console.log(nextGreaterElement(arr, n));
