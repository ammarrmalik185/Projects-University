const http = require("http")
const url = require("url")
const fs = require("fs")

http.createServer((req, res)=>{
    let path = url.parse(req.url)
    fs.appendFile("log.txt", req.url + "\n", (err => {if(err) throw err}))

    switch (path.path){
        case '/':
            res.writeHeader(200, {"Content-Type": "text/html"})
            fs.readFile("pages/index.html", (err, data)=>{
                res.write(data.toString())
                res.end()
            })
            break;
        case '/aboutus':
            res.writeHeader(200, {"Content-Type": "text/html"})
            fs.readFile("pages/aboutus.html", (err, data)=>{
                res.write(data.toString())
                res.end()
            })
            break;
        case '/contactus':
            res.writeHeader(200, {"Content-Type": "text/html"})
            fs.readFile("pages/contactus.html", (err, data)=>{
                res.write(data.toString())
                res.end()
            })
            break;
        default:
            res.writeHeader(404, {"Content-Type": "text/html"})
            fs.readFile("pages/404.html", (err, data)=>{
                res.write(data.toString())
                res.end()
            })
            break;
    }

}).listen(8081, (err)=>{
    console.log("Server Started")
})
