function sum(x, y) {
    return x + y;
}
var sum1 = function (x, y) {
    return x + y;
};
function greet(greeting, name) {
    return greeting + " " + name + "!";
}
function greet1(name, greeting) {
    if (greeting === void 0) { greeting = "name"; }
    return greeting + " " + name + "!";
}
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of numbers ", sum);
}
console.log(sum(2, 3));
console.log(sum1(2, 3));
console.log(greet("Hello", "Ammar"));
console.log(greet("Hello"));
console.log(greet1("Ammar"));
addNumbers(1, 2, 3, 4, 5);
addNumbers(3, 4.2, 4, 32, 3);
