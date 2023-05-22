
// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// configuration
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// define database

mongoose.connect("mongodb+srv://ajeetPatel:EkNWRayuzasCXXCN@cluster0.twosh8o.mongodb.net/fyndnxt?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error " + err);
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    linkedIn: String,
    country: String,
    state: String,
    city: String,
    pin: Number,
    agreement: Boolean,
})

const User = new mongoose.model("User", userSchema);

// Routes


app.post("/signup", (req, res) => {
    console.log(req.body);
    const {name, email, phone, linkedIn, country, city, state, pin, agreement} = req.body;


    User.findOne({email: email})
    .then((prevUser) => {
        if(prevUser){
            res.send({message: "User Already Registered", user: null});
        }else{
            const user = new User({
                name, 
                email, 
                phone, 
                linkedIn, 
                country, 
                city, 
                state, 
                pin, 
                agreement
            })
        
            user.save()
            .then((createdUser)=> {
                // console.log("user created" + createdUser);
                res.send({message: "Successful", user: createdUser});
            })
            .catch((err)=> {
                res.send(err);
            })
            
        }
    })
    .catch(err => {
        res.send({message: err});
    })
    

})

app.post("/dashboard", (req, res) => {
    res.send("Voila, working on dashboard also");
})

app.listen(9000, () => {
    console.log("Server started at port 9000");
})