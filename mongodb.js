const mongoose = require('mongoose');
mongoUrl = "mongodb+srv://Celina:qazplm@cluster0.mvphbd4.mongodb.net/"

mongoose.set('strictQuery', true)
mongoose.connect(mongoUrl, {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

// default connections
const db = mongoose.connection;

// events
db.on("error", console.error.bind(console, "Mongodb connected"));

// creating collection
db.once('open', ()=>{
    console.log("Connected to MongoDB");

    db.createCollection('Collection', (err, result)=>{
        if(err){
        console.error('error while creating collection');
        }
        else{
            console.log('collection created');
        }
        mongoose.connection.close();
    })
})