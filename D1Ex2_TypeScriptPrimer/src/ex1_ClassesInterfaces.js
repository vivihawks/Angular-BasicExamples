class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
class Teacher {
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var student = new Student("Vignesh Murali", "Murali", "Natarajan");
document.body.innerHTML = greeter(student);
//# sourceMappingURL=ex1_ClassesInterfaces.js.map