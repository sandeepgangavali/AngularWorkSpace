var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Sandeep", lastName: "Gangavali" };
document.body.textContent = greeter(user);
