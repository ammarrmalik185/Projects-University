
function sumOfMuls(x, y, z){
    var sum = 0;
    for (var i=1; i < z; i++){
        if (i % x == 0 || i % y == 0){
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfMuls(3, 5, 10))