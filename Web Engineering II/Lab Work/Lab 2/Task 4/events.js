const events = require("events")

let myEvent = new events();

myEvent.on("start", () => {
    console.log("on function ran")
});

myEvent.once("start", () => {
    console.log("once function ran")
});


myEvent.emit("start");
myEvent.emit("start");
myEvent.emit("start");
