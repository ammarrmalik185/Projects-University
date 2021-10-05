class Employee {
    constructor(name="", dept="general") {
        this.name = name;
        this.dept = dept;
    }
    print(){
        console.log("------------------------")
        for (let i in this){
            console.log(`${i} : ${this[i]}`)
        }
        console.log("------------------------")
    }
}
class Manager extends Employee{
    constructor(reports=[]) {
        super();
        this.reports = reports;
    }
}
class WorkerBee extends Employee{
    constructor(projects=[], name, dept) {
        super(name, dept);
        this.projects = projects;
    }
}
class SalesPerson extends WorkerBee{
    constructor(quota=100, projects, name, dept) {
        super(projects, name, dept);
        this.quota = quota;
        this.dept = "sales"
    }
}
class Engineer extends WorkerBee{
    constructor(machine="", projects, name, dept) {
        super(projects, name, dept);
        this.machine = machine;
        this.dept = "engineering"
    }
}

let e = new Engineer("");
let s = new SalesPerson();
let w = new WorkerBee();
let em = new Employee();

e.print()
s.print()
w.print()
em.print()