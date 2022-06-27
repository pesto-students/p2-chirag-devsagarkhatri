/**
 * Problem 7.4: Parenthesis Checker
 *      Given an expression string x. Examine whether the pairs 
 *      and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
 *  For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
 *      Example 1:
 *          Input:      {([])}
 *          Output:     true
 *          Explanation:{ ( [ ] ) }. 
 *              Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.
 */

function ParenthesisChecker(arr){
    let map = { ')':'(', ']':'[', '}':'{' };
    let balanceStack = [];

    for(let i=0;i<arr.length;i++){
        if(Object.values(map).includes(arr[i])){
            balanceStack.push(arr[i]);
            console.log("Push : "+balanceStack);
        }
        else if(balanceStack[balanceStack.length-1] === map[arr[i]]){
            balanceStack.pop();
            console.log("Pop  : "+balanceStack);
        }else{
            return false;
        }
    }
    return !balanceStack.length;
}
arr="{[([{}])]}"
console.log(ParenthesisChecker(arr));
