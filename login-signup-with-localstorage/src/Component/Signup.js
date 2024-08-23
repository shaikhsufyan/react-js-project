import React, { useState } from 'react'
import main from "./images/main.jpg"

const Signup = () => {
    const [data, setData] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleInput = (event) =>{
        setName(event.target.value)
        setEmail(event.target.value)
        setPassword(event.target.value)
        console.log(event.target.value)

    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const userData=[{
            name:name,
            email:email,
            password:password
        }]
         const users = JSON.stringify(userData)
        
        window.localStorage.setItem("userData",users)
    } 
  return (
    <div className='main-page'>
        <form onSubmit={handleSubmit}>
            <div>
                <p className='heading'>Sign Up</p>
            </div>

            <div>
                <input type='text' placeholder='Enter Name' onChange={handleInput}/>
                <input type='text' placeholder='Enter Email' onChange={handleInput}/>
                <input type='password' placeholder='Enter Password' onChange={handleInput}/>
            </div>
            <div className='account'>
                <p>Already have an account?<a href=''>LogIn</a></p>
            </div>
            <div>
                <button >Sign Up</button>
            </div>
        </form>

        <img src={main}/>
    </div>
  )
}

export default Signup