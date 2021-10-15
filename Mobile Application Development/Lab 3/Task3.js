let add = (a, b) => {
    a = a !== undefined ? a : 0;
    b = b !== undefined ? b : 0;
    return a + b;
}

let subtract = (a=0, b=0) => a - b;

let multiply = (...args) => {
    var res = 1;
    for (var i of args){
        res *= i
    }
    return res;
}
// let divide = (d) => {
//     // console.log(arguments)
//     var res = d;
//     for (var i = 1; i < arguments.length; i++){
//         console.log("a")
//         res /= arguments[i]
//     }
//     return res;
// }

function divide (d){
    var res = d;
    for (var i = 1; i < arguments.length; i++){
        res /= arguments[i]
    }
    return res;
}


console.log(divide(6, 3, 5))