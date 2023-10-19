// for creating api we use express Third Party Package
const express = require('express');
const app = express();

// creating simple api
// to access data
app.get('/', (req, res)=>{
    res.send("Hello World!");
})

// to see the output we use postman
app.post('/post',(req, res)=>{
    res.send("This is post method")
})
app.listen(4000);