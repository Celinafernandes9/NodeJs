const cookie = require("cookie-parser");
const express = require("express");
const app = express();

// middleware
app.use(cookie());

app.get("/", function (req, res){
  res.send("COOKIE-PARSER");
});

let User = {
    name:"prachi",
    age:"22"
}

app.get('/setUser', (req, res)=>{
    res.cookie("Userdata", User)
    res.send("Data added to cookie")
})

// accessing added cookies
app.get('/getUser', (req, res)=>{
    res.send(req.cookies)
})

app.get('/logout', (req, res)=>{
    res.clearCookie('Userdata')
    res.send("cokkie deleted successfully")
})
app.listen(4000);