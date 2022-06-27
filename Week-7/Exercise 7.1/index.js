/**
 * Problem 7.1 : Reverse the Linked list :
 *  Given a linked list of N nodes. The task is to reverse this list.
 *  Example 1:
 *      Input:LinkedList: 1->2->3->4->5->6
 *      Output: 6 5 4 3 2 1
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
        curr = curr.next;
    }
    console.log(str);
}

function reverseList(){
  let prev = null, curr = head, after = null;
  while(curr.next !== null)
  {
    after = curr.next;
    curr.next = prev;
    prev = curr;
    curr = after;  //curr = curr.next
  }
  curr.next = prev;
  head = curr;
}

arr=[2,7,8,9,10]
createSLL(arr);
console.log("Original LinkedList :");
traverseSLL();
reverseList();
console.log("Reverse LinkedList :");
traverseSLL();
