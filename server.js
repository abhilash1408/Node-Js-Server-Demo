const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

const mongoose = require("mongoose");

const Router = require("./routes/router");

const dbURL = 'mongodb://localhost:27017/Test'
const db = mongoose.connection;

mongoose.connect(dbURL, {useNewUrlParser: true, useCreateIndex: true});

db.on('connected', function(){
    console.log("Mongoose default connection is open to ", dbURL);
});

db.on('error', function(err){
    console.log("Mongoose default connection has occured "+ err +" error");
});

db.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0);
    });
});

app.get("/",(req,res)=>{
    res.send("Welcome.")
})

app.use("/api",Router)

app.listen(3000,()=>{
    console.log("server running ar port 3000")
})