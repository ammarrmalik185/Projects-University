const fs = require('fs');
  
let data = "This is a file containing a collection of books.\n";
  
fs.writeFile("books.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});

fs.appendFile('books.txt', "Intro to Java\n", function (err) {
  if (err) throw err;
  console.log('Saved!');
});