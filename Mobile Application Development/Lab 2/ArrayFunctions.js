let A1 = [5, "3", "hello", 3.5, true]
let A2 = ["ok", 5, 6, 7, 2.3, false, "7"]

console.log("A1 after copy")
A1.copyWithin(2, 0, 2);
console.log(A1)

console.log("A2 after copy")
A2.copyWithin(3, 0);
console.log(A2)

console.log(A1.entries())
console.log(A2.entries())

console.log("Fill with 3 prams")
A1.fill(4, 2, 4);
console.log(A1);

console.log("Fill with 2 prams")
A2.fill(4, 2);
console.log(A2);

console.log("Fill with 1 pram")
A1.fill(4);
console.log(A1);

A3 = [5, 4, 2, 4, 2, 4, 4]

console.log("Result of find function")
findRes = A3.find(value => value >= 4)
console.log(findRes)

console.log("Result of filter function")
filterRes = A3.filter(value => value >= 4)
console.log(filterRes)

console.log("Result of map function")
mapRes = filterRes.map(value => value *3)
console.log(mapRes)
