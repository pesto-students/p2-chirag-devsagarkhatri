/**
 * Problem 8.3: Binary Tree Level Order Traversal
 *  Given the root of a binary tree, return the level order traversal of
 *  its nodes' values. (i.e.,from left to right, level by level).
 * 
 *  Example 1:
 *      Input: root = [3,9,20,null,null,15,7]
 *      Output: [[3],[9,20],[15,7]]
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

function levelOrderTraversal(root){
    let queue = [];
    let temp=[];
    let res=[];
    queue.push(root);
    res.push(queue);
    while(queue.length!==0){
        temp=[];
        let node = queue.shift();
        if(node!==undefined){
            if(node.left){
                queue.push(node.left.value);
                temp.push(node.left.value);
            }
            if(node.right){
                queue.push(node.right.value);
                temp.push(node.right.value);
            }
            
        }   res.push(temp);     
    }
    return res;
}

arr = [3,9,20,8,10,15,7,21];
let root = createTree(arr);
console.log(levelOrderTraversal(root));
