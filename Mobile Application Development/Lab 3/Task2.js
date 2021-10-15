function min(...args){
    var min = Infinity;
    for (var i of args){
        if (i < min)
            min = i
    }
    return min;
}
console.log(min(4, 8, 1, 3))

function max(...args){
    var max = -Infinity;
    for (var i of args){
        if (i > max)
        max = i
    }
    return max;
}
console.log(max(4, 8, 1, 3))