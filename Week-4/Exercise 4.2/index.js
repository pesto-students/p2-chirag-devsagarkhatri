var Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

//TODO Starts
var Teacher = function () { };
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}
//TODO Ends

var him = new Teacher();
him.initialize("Adam", 45);
him.teach("inheritance");
