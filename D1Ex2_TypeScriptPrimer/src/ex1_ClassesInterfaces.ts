class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial:string, public lastName:string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
class Teacher{
    firstName: string;
    lastName: string;
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var student = new Student("Vignesh Murali", "Murali", "Natarajan");

document.body.innerHTML = greeter(student);