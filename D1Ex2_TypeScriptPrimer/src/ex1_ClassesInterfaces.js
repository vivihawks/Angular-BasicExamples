var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var student = new Student("Vignesh Murali", "Murali", "Natarajan");
document.body.innerHTML = greeter(student);
