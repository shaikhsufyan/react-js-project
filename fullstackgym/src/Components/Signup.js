import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [store, setStore] = useState({
        name:"",
        email:"",
        password:"",
        phone:""

    })

    const navigate = useNavigate();

    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        

        setStore({...store,
        [name]:value})
        

    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const send = await fetch(`https://gym-api-2.onrender.com/register`,{
            method:"POST",
            headers:{ 
                "Content-Type":"application/json"
            },  
            body:JSON.stringify(store)
            
        });

        let jsonData = await send.json();
        
        event.target.name.value=""
        event.target.email.value=""
        event.target.password.value=""
        event.target.phone.value="";

        console.log(send.status);   
        let statusCode = send.status;
        if(statusCode == 200){
            alert(jsonData.message)
            // navigate("/")

        }   
        if(statusCode == 500){
            alert(jsonData.message)
        }   
    }
     
  return (
    <>
       <h1 className='connect'>Connect With Us</h1>
        <form onSubmit={handleSubmit} class="join">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" required id="name" name='name' onChange={handleInput} /><br/>
            <input type="email" placeholder="Email" required id="email" name='email' onChange={handleInput}/><br/>
            <input type="password" placeholder="Password" required id="pass" name='password' onChange={handleInput}/><br/>
            <input type="number" placeholder="Number" required id="num" name='phone' onChange={handleInput}/><br/>
            <button id="join">Sign Up</button>
        </form>
    </>
  )
}

export default Signup