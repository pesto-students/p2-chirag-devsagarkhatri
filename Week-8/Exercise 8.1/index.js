/**
 * Problem 8.1: Maximum Depth of Binary Tree
 *  Given the root of a binary tree, return its maximum depth.
 *  A binary tree's maximum depth is the number of nodes along 
 *  the longest path from the root node down to the farthest leaf node.
 * 
 *      Example 1:
 *          Input: 
 *              root = [3,9,20,null,null,15,7]
 *          Output: 3
 */
class TreeNode{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }
}
function insertIntoTree(pos,arr){
    let curr = null;
    if(pos<arr.length){
        curr = new TreeNode(arr[pos]);
        curr.left = insertIntoTree(2*pos+1,arr);
        curr.right = insertIntoTree(2*pos+2,arr);
    }
    return curr;
}
function createTree(arr){
    return insertIntoTree(0,arr);
}
function maximumDepth(root){
    if(root==null){return 0;}

    let leftDepth = maximumDepth(root.left);
    let rightDepth= maximumDepth(root.right);
    
    return leftDepth>rightDepth?(leftDepth+1):(rightDepth+1);
}

arr = [3,9,20,null,null,15,7];
let root = createTree(arr);
console.log(maximumDepth(root));
