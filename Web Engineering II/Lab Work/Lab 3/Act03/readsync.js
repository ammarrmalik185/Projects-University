const fs = require('fs');
var path = './programming.txt';
const data = fs.readFileSync(path,
              {encoding:'utf8', flag:'r'});
 
console.log(data);

fs.writeFile("Programming2.txt", data, (err) => {
    if (err)
      console.log(err);
    else {
    }
  });

try {
    fs.unlinkSync(path)
    //file removed
  } catch(err) {
    console.error(err)
  }

