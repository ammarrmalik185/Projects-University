class Person {
    constructor(fname = "fName", lname = "lName", age = "Default Age") {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    printInfo() {
        for (let key in this){
            console.log(`${key} is ${JSON.stringify(this[key])}`)
        }
    }
}

class Student extends Person{
    constructor(EnrolledIn=[new Course()], fname = "fName", lname = "lName", age = "Default Age") {
        super(fname, lname, age);
        this.EnrolledIn = EnrolledIn;
    }
}

class Employee extends Person {
    constructor(department = "CS", designation = "designation", salary = 50000, fname = "fName", lname = "lName", age = "Default Age") {
        super(fname, lname, age);
        this.department = department;
        this.designation = designation
        this.salary = salary
    }
}

class Teacher extends Employee{
    constructor(teaches = [new Course()], department = "CS", designation = "designation", salary = 50000, fname = "fName", lname = "lName", age = "Default Age") {
        super(department, designation, salary, fname, lname, age);
        this.Teaches = teaches;
    }
}

class Staff extends Employee{
    constructor(department = "CS", designation = "designation", salary = 50000, fname = "fName", lname = "lName", age = "Default Age") {
        super(department, designation, salary, fname, lname, age);
    }
}

class Course {
    constructor() {
        this.id = "MTH-142";
        this.title = "Maths";
        this.description = "its maths"
    }
}

let std1 = new Student();
let std2 = new Student();

let teach1 = new Teacher();
let teach2 = new Teacher();

let staff1 = new Staff();
let staff2 = new Staff();


std1.printInfo();
std2.printInfo();

teach1.printInfo();
teach2.printInfo();

staff1.printInfo();
staff2.printInfo();
