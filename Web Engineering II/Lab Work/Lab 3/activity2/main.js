var fs = require("fs")
fs.readFile("./test.txt", (err, data) => {
    console.log(`error is: ${err}`)
    console.log(`data is: ${data}`)
})
console.log(fs.readFileSync("./test.txt"))

fs.writeFile("./test2.txt", "this is another file", (err) => console.log(`error is: ${err}`))
console.log(fs.writeFileSync("./testsync2.txt", "ok"))

fs.rename("./test2.txt", "test3.txt", err => console.log(`error is: ${err}`))
console.log(fs.renameSync("./testsync2.txt", "testsync3.txt"))

fs.appendFile("./test.txt", "this is appended text", err => console.log(`error is: ${err}`))
console.log(fs.appendFileSync("./test.txt", "this is appended text"))

fs.unlink("./test2.txt", err => console.log(err))
console.log(fs.unlinkSync("./testsync2.txt"))

fs.open("./test.txt", (data, err) => {
    console.log(data)
    console.log(err)
})