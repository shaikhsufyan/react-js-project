require("dotenv")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken")

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})


UserSchema.methods.generateToken = async function(){
    const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
    console.log(token);
    this.tokens=this.tokens.concat({token:token});
    console.log(this);
    return token;
}

const MySchema = new mongoose.model("userData", UserSchema);
module.exports=MySchema;