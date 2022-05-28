/*
    ------------------------------
    Question :-
    ------------------------------
        Refactor the below stack implementation, using the 
        concept of closure, such that there is no way to access
        the items array outside of createStack() function scope.

        function createStack() {
            return {
                items : [],
                push(item) {
                    this.items.push(item);
                },
                pop() {
                    this.items.pop();
                }
            };
        }
        const stack = createStack();
        stack.push(10);
        stack.push(5);
        stack.pop(); // => 5
        stack.items; // => undefined

    ------------------------------
    Solution :-
    ------------------------------
*/

function createStack() {
    const items = [];
    return {
        push(item) {
            items.push(item);
            console.log('pushed : ' + item);
        },
        pop() {
            console.log('pop    : ' + items.pop());
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
console.log('stack[]: ' + stack.items); // => undefined
