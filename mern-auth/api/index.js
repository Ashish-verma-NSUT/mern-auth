// const express = require("express");
import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongoDB")
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());

app.listen(3000, ()=>{
    console.log("server listening on port 3000");
})

app.use('/api/user', userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    return res.status(statusCode).json({
        success : false,
        message,
        statusCode
    })
})