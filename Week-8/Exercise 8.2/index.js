/**
 * Problem 8.2 : Validate a Binary Tree
 *  Given the root of a binary tree, 
 *  determine if it is a valid binary search tree (BST).
 *      Example :
 *          Input: root = [2,1,3]
 *          Output: true 
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

function isBST(root){
    if(root==null){return true;}
    let result=true;
    let isLeft = true;
    let isRight=true;

    if(root.left==null ){
        isLeft=false;
    }
    if(root.right==null){
        isRight=false;
    }
    // console.log(root.left.value+"<"+root.value+" and " +root.right.value+">"+root.value);

    if(isLeft && root.left.value<root.value ){
        
        result= isBST(root.left) ;
    }
    if(result && isRight && root.right.value>root.value){
        result = isBST(root.right);
    }
    return result;
}


arr = [3,2,4,1,null,null,5];
let root = createTree(arr);
console.log(isBST(root));
