/*
    ------------------------------
    Question :-
    ------------------------------
        Create 3 simple functions where call, bind and apply 
        are used. The intention of this exercise is to understand 
        how they work and their differences.

    ------------------------------
    Solution :-
    ------------------------------

*/
var user = {
    firstname: 'Sagar',
    lastname: 'Khatri',
    getUserName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var userName = function(hobby1, hobby2) {
    console.log(this.getUserName() + ' loves ' + hobby1 + ' and ' + hobby2 + ' \n ');
};

console.log("Runtime binding using call() function :-")
userName.call(user, 'playing badminton', 'swimming');

console.log("Runtime binding using apply() function :-")
userName.apply(user, ['reading spiritual books', 'meditation sessions']);

console.log("Compile time binding using bind() function :-")
var userInfo = userName.bind(user); // creates new object and binds user
userInfo('developing web3.0', 'playing chess');
