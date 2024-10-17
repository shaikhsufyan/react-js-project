const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user")
 
.then(()=>{
    console.log("DB Connect Succesfully");
}).catch(()=>{
    console.log("DB Not connect succesfully");
})