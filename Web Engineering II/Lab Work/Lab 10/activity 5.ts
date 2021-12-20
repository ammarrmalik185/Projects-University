class Person {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
}

class Employee extends Person{
    empCode: number;

    constructor(empCode:number, name:string) {
        super(name)
        this.empCode = empCode;
    }

    displayName():void{
        console.log(`Name: ${this.name}, Employee Code; ${this.empCode}`)
    }
}

let emp1:Employee = new Employee(1, "Ammar")
let emp2:Employee = new Employee(2, "Anas")
let emp3:Employee = new Employee(3, "Asked")

emp1.displayName();
emp2.displayName();
emp3.displayName();
