const mongoose = require("mongoose"); 
const db = require("..models");
console.log("hello")
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongo"
)