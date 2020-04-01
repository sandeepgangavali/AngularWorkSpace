class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}




interface Person {
    firstName: String;
    lastName: String;
}



function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Sandeep", lastName: "Gangavali" }
document.body.textContent = greeter(user);