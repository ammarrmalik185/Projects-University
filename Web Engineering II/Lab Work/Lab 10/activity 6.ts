class Person {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
}

interface IEmployee {
    empCode:number,
    name:string,
    getSalary(empCode:number): number;
}

class Employee extends Person implements IEmployee{
    empCode: number;

    constructor(empCode:number, name:string) {
        super(name)
        this.empCode = empCode;
    }

    displayName():void{
        console.log(`Name: ${this.name}, Employee Code; ${this.empCode}`)
    }

    getSalary(empCode: number): number {
        return 2000;
    }
}

let emp1:Employee = new Employee(1, "Ammar")

emp1.displayName();
console.log(emp1.getSalary(1))
