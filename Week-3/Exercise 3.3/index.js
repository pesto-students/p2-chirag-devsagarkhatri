/*
    ------------------------------
    Question :-
    ------------------------------
        What is the output of the below problem and why ?
*/

function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

/*
    ------------------------------
    Solution :-
    ------------------------------
        The output of the following program is 'Count is 0'.
        This  happens because the message variable is created when the
        count variable is created and is not updated afterwords.

        'message' variable exists within the scope of createIncrement() 
        function. Its initial value is 'Count is 0' .Thus the message 
        variable is being treated as a string of static nature that 
        does not change even when the increment() is called 3 times 
        and the count valiue is now 3.Therefore 'Count is 0' is logged by the log().
*/
