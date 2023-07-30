//IMPORTING PACKAGE
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');

//setting it to db
const db = mongoose.connection;

//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when database connects successfully
db.once("open", function(){
    console.log("Successfully connected to database");
});

module.exports = db;