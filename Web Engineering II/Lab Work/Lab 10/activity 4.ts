function sum(x:number, y:number) :number {
    return x+y
}
let sum1 = function (x:number, y:number) :number {
    return x+y
}
function greet(greeting:string, name?:string) :string {
    return greeting + " " + name + "!";
}
function greet1(name:string, greeting:string="name") :string {
    return greeting + " " + name + "!";
}

function addNumbers(...nums: number[]) {
    let i;
    let sum:number = 0;

    for (i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
    console.log("sum of numbers ", sum)
}

console.log(sum(2,3))
console.log(sum1(2,3))
console.log(greet("Hello", "Ammar"))
console.log(greet("Hello"))
console.log(greet1("Ammar"))

addNumbers(1,2,3,4,5);
addNumbers(3,4.2,4,32,3);
