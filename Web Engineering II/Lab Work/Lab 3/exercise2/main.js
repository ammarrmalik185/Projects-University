var http = require("http");
var url = require("url");
http.createServer((req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"})

    let path = url.parse(req.url)

    switch(path.pathname){
        case "/":
            res.write('<h1 style="color: green; text-align: center; background: grey"> Index.html <h1>')
            break;
        case "/addPeople":
            res.write('<h1 style="color: green; text-align: center; background: grey"> Addpeople.html <h1>')
            break;
        case "/removePeople":
            res.write('<h1 style="color: green; text-align: center; background: grey"> RemovePeople.html <h1>')
            break;
        default:
            res.write('<h1 style="color: green; text-align: center; background: grey"> Page not found <h1>')
    }
    console.log (path.query)
    if (path.query !== null){
        res.write('<h1 style="color: green; text-align: center; background: grey"> Hello '+ path.query.split("=")[1] +'<h1>')

    }
    res.end('<h1 style="color: red; text-align: center; background: grey"> Footer <h1>');
}).listen(8081, () => {
    console.log("Server Started")
});
