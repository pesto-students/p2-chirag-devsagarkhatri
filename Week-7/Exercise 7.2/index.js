/**
 * Problem 7.2: Rotate Linked List
 *  Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,where k is a given positive integer smaller than or equal to length of the linked list.
 *  
 *  Example 1:
 *      Input:  N = 5
 *              value[] = {2, 4, 7, 8, 9}
 *              k = 3
 *      Output: 8 9 2 4 7
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
 
 function traverseSLL(head){
     let curr = head; 
     let str="";
     while(curr !== null)
     {
         str = str + curr.value +" ";
         curr = curr.next;
     }
     console.log(str);
 }
 function rotateSLL(head,k){
    let curr = head;
    let head1 =  new SLLNode(curr.value);
    let temp = head1;
    while(--k){
        temp.next = new SLLNode(curr.next.value);
        temp = temp.next;
        curr = curr.next;
    }
    
    head = curr.next;   
    curr = head;
    
    while(curr.next !== null)
    {
        curr = curr.next;
    }
    curr.next = head1;
 }

arr=[2,7,8,9,10]
createSLL(arr);
console.log("Original LinkedList :");
traverseSLL(head);
console.log("rotateSLL : ");
rotateSLL(head,3);
console.log("After rotation SSL :");
traverseSLL(head);
