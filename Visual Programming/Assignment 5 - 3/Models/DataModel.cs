using System.ComponentModel.DataAnnotations;

namespace Assignment_5___3.Models {
    public class Department {
        [Key]
        public int dno { get; set; }
        public string dname { get; set; }
        public int budget { get; set; }
    }
    public class Person {
        public string name { get; set; }
        public string age { get; set; }
    }
    public class Employee : Person {
        [Key]
        public int ssn { get; set; }
        public string salary { get; set; }
        public string phone { get; set; }
    }
    public class Manages {
        public int ID { get; set; }
        public int employeeSsn { get; set; }
        public virtual Employee employeeRef { get; set; }
        public int departmentDno { get; set; }
        public virtual Department departmentRef { get; set; }
    }
    public class Works_In {
        public int ID { get; set; }
        public int employeeSsn { get; set; }
        public virtual Employee employeeRef { get; set; }
        public int departmentDno { get; set; }
        public virtual Department departmentRef { get; set; }
    }
}