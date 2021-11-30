var fruits = ["Apple", "Orange", "Banana"];
var fruitss = ["Apple", "Orange", "Banana"];
for (var index in fruits) {
    console.log(fruits[index]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["NewsPaper"] = 0] = "NewsPaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
var empId;
empId = 4;
empId = "lol";
