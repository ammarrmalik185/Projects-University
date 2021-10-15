let fs = require("fs")
var zlib = require("zlib")

let rs1 = fs.createReadStream("file1.txt")
let ws1 = fs.createWriteStream("file2.txt.gz")
rs1.pipe(zlib.createGzip()).pipe(ws1)




