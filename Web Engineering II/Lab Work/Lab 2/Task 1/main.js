//console.log(global);

let passed = 0;
global.setInterval(() => {
    passed += 1;
    console.log(`${passed}s have passed`)
}, 1000);

var http = require("http");
http.createServer((req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"})
    res.write('<h1 style="color: green; text-align: center; background: grey"> Main <h1>')
    res.end('<h1 style="color: red; text-align: center; background: grey"> Footer <h1>');
}).listen(8081);