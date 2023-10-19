// for creating api we use express Third Party Package
const express = require('express');
const app = express();
// for connecting db
const mongoose = require('mongoose');

app.use(express.json());
const router = require('./route');
app.use("/user", router);

// app.use(express.static('public'))

// connect to MongoDB database using Mongoose
mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://Celina:qazplm@cluster0.mvphbd4.mongodb.net/Nodejs?retryWrites=true&w=majority")

.then(()=>{
    console.log("connected to MongoDB");
})
.catch((err)=>{
    console.log(`Error : ${err}`);
})

// (err, data)=>{
//     if(err) throw err
//     console.log("Connection created");
// }

// creating simple api
// to access data
// app.get('/', (req, res)=>{
//     res.send("Hello World!");
// })

// to see the output we use postman
// app.post('/post',(req, res)=>{
//     res.send("This is post method")
// })
app.listen(4000);