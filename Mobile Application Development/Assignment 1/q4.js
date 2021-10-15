function SolveThis (solveObj){
    let endRes = {}
    for (let key1 in solveObj){
        endRes[key1] = solver[key1](solveObj[key1])
    }
    return endRes;
}

let solver = {
    sum : solveArray => solveArray.reduce((prev, curr) =>  prev + curr),
    sub: solveArray => solveArray.reduce((prev, curr) =>  prev - curr),
    max : solveArray => solveArray.reduce((prev, curr) => prev > curr ? prev : curr),
    min : solveArray => solveArray.reduce((prev, curr) => prev < curr ? prev : curr),
    mul: solveArray =>  solveArray.reduce((prev, curr) =>  prev * curr),
    div: solveArray => solveArray.reduce((prev, curr) =>  prev / curr)
}

console.log(SolveThis({sum: [3,2,4], max: [2,4,3,5], min: [5,3,4,3], mul: [1,3,4,6]}))

