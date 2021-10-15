exports.date = Date.now()
exports.add = (a, b) => a + b
exports.multiply = (a, b) => a * b
exports.factorial = a => {
    if (a === 0) return 1
    return a * exports.factorial(a-1);
}