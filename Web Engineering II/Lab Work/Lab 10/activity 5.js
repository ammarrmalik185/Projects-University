var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empCode, name) {
        var _this = _super.call(this, name) || this;
        _this.empCode = empCode;
        return _this;
    }
    Employee.prototype.displayName = function () {
        console.log("Name: " + this.name + ", Employee Code; " + this.empCode);
    };
    return Employee;
}(Person));
var emp1 = new Employee(1, "Ammar");
var emp2 = new Employee(2, "Anas");
var emp3 = new Employee(3, "Asked");
emp1.displayName();
emp2.displayName();
emp3.displayName();
