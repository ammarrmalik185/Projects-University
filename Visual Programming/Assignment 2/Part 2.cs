using System;

namespace Assignment_2 {
    public class Part_2 {
        
    }

    class Employee {
        private int employeeId;
        private string loginName;
        private string password;
        private string department;
        private string firstName;
        private string lastName;

        public Employee() {
        }

        public Employee(int employeeId, string loginName, string password, string department, string firstName, string lastName) {
            this.employeeId = employeeId;
            this.loginName = loginName;
            this.password = password;
            this.department = department;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        public void Login() {
        }

        public int EmployeeId {
            get => employeeId;
            set => employeeId = value;
        }

        public string LoginName {
            get => loginName;
            set => loginName = value;
        }

        public string Password {
            get => password;
            set => password = value;
        }

        public string Department {
            get => department;
            set => department = value;
        }

        public string FirstName {
            get => firstName;
            set => firstName = value;
        }

        public string LastName {
            get => lastName;
            set => lastName = value;
        }
    }

    class DepartmentManager : Employee {
        
        public DepartmentManager() {
        }

        public DepartmentManager(int employeeId, string loginName, string password, string department, string firstName, string lastName) : base(employeeId, loginName, password, department, firstName, lastName) {
        }

        public void ApprovePurchase() {
        }
    }

    class Order {
        private long orderNo;
        private DateTime orderDate;
        private string status;

        public Order() {
        }

        public Order(long orderNo, DateTime orderDate, string status) {
            this.orderNo = orderNo;
            this.orderDate = orderDate;
            this.status = status;
        }

        public void AddItem() {
        }

        public void RemoveItem() {
        }

        public void SubmitOrder() {
        }

        public long OrderNo {
            get => orderNo;
            set => orderNo = value;
        }

        public DateTime OrderDate {
            get => orderDate;
            set => orderDate = value;
        }

        public string Status {
            get => status;
            set => status = value;
        }
    }

    class OrderItem {
        private string productNo;
        private int quantity;
        private int unitPrice; // no idea what "Real" datatype is

        public OrderItem() {
        }

        public OrderItem(string productNo, int quantity, int unitPrice) {
            this.productNo = productNo;
            this.quantity = quantity;
            this.unitPrice = unitPrice;
        }

        public string ProductNo {
            get => productNo;
            set => productNo = value;
        }

        public int Quantity {
            get => quantity;
            set => quantity = value;
        }

        public int UnitPrice {
            get => unitPrice;
            set => unitPrice = value;
        }
    }
    

    class Product {
        private string productNo;
        private string productName;
        private string category;
        private string description;
        private int unitPrice; // no idea what "Real" datatype is (again)
        private string vendorCode;

        public Product() {
        }

        public Product(string productNo, string productName, string category, string description, int unitPrice, string vendorCode) {
            this.productNo = productNo;
            this.productName = productName;
            this.category = category;
            this.description = description;
            this.unitPrice = unitPrice;
            this.vendorCode = vendorCode;
        }

        public string ProductNo {
            get => productNo;
            set => productNo = value;
        }

        public string ProductName {
            get => productName;
            set => productName = value;
        }

        public string Category {
            get => category;
            set => category = value;
        }

        public string Description {
            get => description;
            set => description = value;
        }

        public int UnitPrice {
            get => unitPrice;
            set => unitPrice = value;
        }

        public string VendorCode {
            get => vendorCode;
            set => vendorCode = value;
        }
    }

    class ProductCatalog {

        public void ListCategorizes() {
        }

        public void ListProducts() {
        }
        
    }
}