require("dotenv").config()
const express = require("express");
const app = express();
const MySchema = require("./src/Model/Schema");
require("./src/database/db");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
 
 
 app.set("view engine","hbs");
 

app.use(cors());
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const corsOption = {
  origin: "http://localhost:3000/",
};

const PORT = process.env.PORT | 5000;
 
 
 
app.get("/", async(req, res) => {
   
  res.send("HOME");
});
app.post("/register", async (req, res) => {
  console.log(req.body);
  const bcryptPassword =await bcrypt.hash(req.body.password,10);
  console.log(bcryptPassword); 
 
  try {
    const data = new MySchema({
      name: req.body.name,
      password: bcryptPassword,
      email: req.body.email,
      phone: req.body.phone,
    });

   const myToken = await data.generateToken();
   console.log("token"+myToken);
   
   res.cookie("jwtToken",myToken)

    const result = await data.save();
    res.status(200).json({"message":"Register Succesfully"})
    console.log(result);
     
     
  } catch (err) {
    console.log(err);
    res.status(500).json({"message":"Something Went Wrong !"})

  }
});
 
app.get("/users", async (req, res) => {
  
  try {
    const allUser = await MySchema.find();
    res.send(allUser);
  } catch (err) {
    console.log(err);
  }
});
app.post("/login", async (req, res) => {
  
  const {email, password} = req.body;
  console.log(email);
  console.log(password);
   
  
  try{
    let findEmail = await MySchema.findOne({email:email} )
    console.log(findEmail);
    let findPass = findEmail.password;
    console.log(findPass);

    const comparePassword = await bcrypt.compare(password,findEmail.password);
    console.log(comparePassword+ " compare");

    const myToken = await findEmail.generateToken();
    console.log("token"+ myToken);
  

    if(comparePassword === true){
       
      console.log("LOGIN SUCCESSSS");
      res.status(200).json({"message":"LOGIN Succesfully !!"});
    }else{
      console.log("INVALID invalid !!!!!!");
      res.status(400).json({"message":"Invalid Email or Password !!"})
  
    }
  }catch(err){
    res.status(500).json({"message":"Invalid Email or Password !!"})
  }
 

});

app.get("/secret",(req,res)=>{
  console.log(req.cookies.jwtToken);
})
app.listen(PORT, () => {
  console.log("Running on PORT", PORT);
});
