function isPrime(number){
    for(let i = 2; i < number; i++)
        if (number % i === 0)
            return false
    return true
}

let primeAdd = (...args) => {
    let res = []
    for (let singleArray of args){
        let sumOfPrime = 0;
        for (let singleEntry of singleArray){
            if (isPrime(singleEntry))
                sumOfPrime += singleEntry
        }
        res.push({input: singleArray, sumOfPrime})
    }
    return res
}

console.log(primeAdd([4, 3], [2, 2], [4, 8, 9]))
