/**
 * Problem 7.3: Detect loop in a linked list
 *  Given a linked list of N nodes. The task is to check if the linked list has a loop. Linkedlist can contain self loop.
 *  
 *  Example 1:
 *      Input:
 *          N = 3
 *          value[] = {1,3,4}
 *          x = 2
 *      Output: True
 *      ------------
 *      Explanation: 
 *      ------------
 *          In above test case N = 3.The linked list with nodes N = 3 is given. 
 *          Then value of x=2 is given which means last node is connected with xth node of linked list. 
 *          Therefore, there exists a loop.
 */

 class SLLNode
 {
     constructor(value)
     {
         this.value = value;
         this.next = null;
     }
 }
  
 let head = null;
  
 function createSLL(arr){
     head = new SLLNode(arr[0]);
     let curr = head;
     for(let i = 1; i < arr.length; ++i)
     {
         curr.next = new SLLNode(arr[i]);
         curr = curr.next;
     }
 }
 
 function traverseSLL(){
     let curr = head; 
     let str="";
     while(curr !== null)
     {
         str = str + curr.value +" ";
         console.log(curr.value);
         curr = curr.next;
     }
     console.log(str);
 }
 

function detectLoopInSLL() {
    let set = new Set();
    while(head) {
        if(set.has(head)) {
            return true;
        } else {
            set.add(head)
            head = head.next;
        }
    }
    return false;
};

function pointEndNodeToHead(){
    let curr=head;
    while(curr.next!==null){
        curr =curr.next;
    }
    curr.next = head;
}

function pointEndNodeToNthNode(n){
    let curr=head;
    let curr1=head;
    let count=0;
    while(curr.next!==null){
        if(count<n){
            count++;
            console.log("Curr 1 : "+curr1.value);
            curr1=curr.next;
        }
        console.log("Curr   : "+curr.value);
        curr = curr.next;
    }
    curr.next = curr1;
}

arr=[2,7,8,9,2,10]
createSLL(arr);
pointEndNodeToNthNode(3)
console.log(detectLoopInSLL());
