import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    const navigate = useNavigate();

    const handleInput = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        if(name == "email"){
            setEmail(value)
        }
        if(name == "password"){
            setPassword(value)
        }

    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(email == "" || password == ""){
            alert("Please Enter Detail")
        }else{
            const userData = JSON.parse(localStorage.getItem("user"));
            console.log(userData);
            userData.map((curItem)=>{
                console.log(curItem.email);
                const storeEmail = curItem.email;
                const storePassword = curItem.password;
                if(email === storeEmail && password === storePassword){
                    alert("Login Successfully !");
                   return navigate("/home")
    
                }else{
                    return setMsg("Invalid Email or Password")
                }
    
                
            })
        }
      
         

    }
  return (
    <div>
    <Navbar/>
       <div>
        <p className='errMsg'>{msg}</p>
       </div>
        <form className='loginForm' onSubmit={handleSubmit}>
            <div>
                <p className='heading'>LogIn</p>
            </div>
            <div className='account'>
                <input type='email' placeholder='Email' name="email" onChange={handleInput}/>
                <input type='password' placeholder='Password' name="password" onChange={handleInput}/>
                <p>Create an account <a href="/">SignUp</a> </p>
            </div>
            <button>LogIn</button>
        </form>
    </div>
  )
}

export default Login