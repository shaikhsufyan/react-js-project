const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://codewithsk99:UqYxThUqUSwVovN7@cluster0.ywhxpk0.mongodb.net/GymData")
 
.then(()=>{
    console.log("DB Connect Succesfully");
}).catch(()=>{
    console.log("DB Not connect succesfully");
})