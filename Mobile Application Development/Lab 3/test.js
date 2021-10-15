let divide = (d) => {
    // console.log(arguments)
    var res = d;
    for (var i = 1; i < arguments.length; i++){
        console.log("a")
        res /= arguments[i]
    }
    return res;
}

console.log(divide(6, 3, 5))