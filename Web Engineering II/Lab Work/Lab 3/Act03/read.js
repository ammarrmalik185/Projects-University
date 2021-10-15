var fs = require('fs');
 
fs.readFile('books.txt', 'utf8', function(err, data){
    console.log(data);
});

fs.rename('books.txt', 'books2.txt', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});
 
console.log('readFile called');