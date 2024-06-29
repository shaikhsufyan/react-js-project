import React, { useState } from "react";
import { NavLink, json,useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email:"",
    password:""
  });
  const navigate = useNavigate()
  
  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setData({...data,
      [name]:value
    })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const check = await fetch(`https://gym-api-2.onrender.com/login`,{ 
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });
    let jsonData = await check.json()
    console.log(jsonData);
 
    e.target.email.value="";
    e.target.password.value="";
    console.log(check.status);
    let statusCode = check.status;
    if(statusCode == 200){
      alert(jsonData.message);
      // navigate("/")
      
    }
    if(statusCode == 400){
      alert(jsonData.message)
    }
    if(statusCode == 500){
      alert(jsonData.message)
    }
    
   
  }





  
  
  return (
    <>
    
      <p className="logHead">LogIn</p>
      <form onSubmit={handleSubmit} class="loginPage">
        <input type="email" placeholder="Email" id="email"  name="email" onChange={handleInput}/>
        <input type="password" placeholder="Password" id="pass"  name="password" onChange={handleInput}/>
        <button id="logBtn" type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;


 