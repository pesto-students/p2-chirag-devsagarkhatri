/**
 * Problem 7.6: Implement a Queue using 2 stack
 *  Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query
 *  of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop
 *  element from queue and print the poped element)
 * 
 */


class MyQueue{
    constructor(){
    this.stack1 = [];
    this.stack2 = []
    }

    pushArray(arr){
        for(let i=0;i<arr.length;i++){
            this.stack1.push(arr[i]);
        }
    }
    push(val){
        this.stack1.push(val);
    }
    pop(){
        if (this.stack2.length){
            return this.stack2.pop();
        } else {
            while (this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
            return this.stack2.pop();
        }
    }
    peek(){
        if (this.stack2.length) return this.stack2[this.stack2.length-1];
        else {
            while (this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
            return this.stack2[this.stack2.length-1]
        }
    }
    empty(){
       return this.stack1.length===0 && this.stack2.length===0;
    }
}

arr=[2,7,8,9,13,8];
let obj = new MyQueue();
obj.pushArray(arr);
console.log(obj.peek());
obj.pop();
console.log(obj.peek());

