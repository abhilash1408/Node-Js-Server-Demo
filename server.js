// creating express app
const express = require('express');
const app = express();
// body parser to parse json / form-urlencoded data from request
const bodyParser = require("body-parser");
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

// mongoose odm for mongodb
const mongoose = require("mongoose");

const Router = require("./routes/router");
// define db url for connection
const dbURL = 'mongodb://localhost:27017/Test'
const db = mongoose.connection;

mongoose.connect(dbURL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

// db connection status logs
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

// 

app.get("/",(req,res)=>{
    res.send("Welcome.")
})

app.use("/api",Router)

// make app listen to requests on a port

app.listen(3000,()=>{
    console.log("server running ar port 3000")
})