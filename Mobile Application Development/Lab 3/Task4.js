function SolveThis (solveObj){
    endRes = {}
    for (var key1 in solveObj){
        console.log(`applying ${key1} on ${solveObj[key1]}`)
        endRes[key1] = solver[key1](solveObj[key1])
    }
    return endRes;
}

let solver = {
    sum : solveArray => {
        console.log(`sum ran with prams: ${solveArray}`)
        var sum = 0;
        for (var i of solveArray){
            sum += i;
        }
        return sum;
    },
    max : solveArray => {
        console.log(`max ran with prams: ${solveArray}`)
        var max = -Infinity;
        for (var i of solveArray){
            if (i > max)
            max = i
        }
        return max;
    },
    min : solveArray => {
        console.log(`min ran with prams: ${solveArray}`)
        var min = Infinity;
        for (var i of solveArray){
            if (i < min)
                min = i
        }
        return min;
    },
    mul: solveArray => {
        var mul = 1;
        for (var i of solveArray){
            mul *= i
        }
        return mul;
    },
    div: solveArray => {
        var div = 1;
        for (var i of solveArray){
            div /= i
        }
        return div;
    }
} 

console.log(SolveThis({sum: [3,2,4], max: [2,4,3,5], min: [5,3,4,3]}))