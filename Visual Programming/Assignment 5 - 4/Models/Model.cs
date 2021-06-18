using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Assignment_5___4.Models {
    public class Department {
        public int ID { get; set; }
        public int dno { get; set; }
        public string dname { get; set; }
        public int budget { get; set; }
    }
    public class Person {
        public string name { get; set; }
        public string age { get; set; }
    }
    public class Employee : Person {
        public int ID { get; set; }
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