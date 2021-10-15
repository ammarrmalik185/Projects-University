var name = "Ammar";
var age = 902;
var lastName = "Malik";

var biographyData = {name, age, lastName};

console.log(biographyData.name)
console.log(biographyData.age)
console.log(biographyData.lastName)

console.log(biographyData.name === biographyData.age);
console.log(typeof(biographyData.name) === typeof(biographyData.lastName));
console.log(typeof(biographyData.name) === typeof(biographyData.age));