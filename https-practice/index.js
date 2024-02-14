const express = require("express");

const app = express();

app.get('/home', (req, res)=>{
    res.json({name: "Ashish"});
})

app.listen(3000, ()=>{
    console.log("server is listening at port 3000");
})