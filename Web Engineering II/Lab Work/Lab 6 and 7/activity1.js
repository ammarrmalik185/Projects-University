const mongoose  = require("mongoose")

mongoose.connect('mongodb://localhost:27017/lab6and7db', function (err, db) {
    if (err) throw err;
    console.log('Successfully connected');
    mongoose.connection.close().then(() => {
        console.log("connected closed")
    })
})


