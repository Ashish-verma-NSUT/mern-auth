// const express = require("express");
import express from 'express';

const app = express();

app.listen(300, ()=>{
    console.log("server listening on port 3000");
})