import React, { useState } from 'react'

const Form = () => {
    const [name,setName] = useState();
    const [password,setPassword] = useState();
    const [email,setEmail] = useState();
    const [confirmPass,setConfirmPass] = useState();

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(name && email && password && confirmPass){
              
            if(password === confirmPass){
                 alert("Sign Up Successfully !"+password.length)
            }else{
                    alert("ERR : Password & ConfirmPassword Must be SAME !")
            }
             
        }else{
            alert("All Fields are Mandatory")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <p className='heading'>SignUp</p>
            <div>
                <p className='fieldName'>Name</p>
                <input type='text' onChange={(event)=>setName(event.target.value)}/>
                <p className={name?"data":"noData"}>{name? "" : "Name is required"}</p>
            </div>
            <div>
                <p className='fieldName'>Email</p>
                <input type='email' onChange={(event)=>setEmail(event.target.value)}/>
                <p className={email?"data":"noData"}>{email? "" : "Email is required"}</p> 
            </div>
            <div>
                <p className='fieldName'>Password</p>
                <input type='password' onChange={(event)=>setPassword(event.target.value)} />
                <p className={password?"data":"noData"}>{password ? "" : "Password is required"}</p>
            </div>
            <div>
                <p className='fieldName'>Confirm Password</p>
                <input type='password' onChange={(event)=>setConfirmPass(event.target.value)}/>
                <p className={confirmPass?"data":"noData"}>{confirmPass? "" : "Confirm password is required"}</p>
            </div>
            <div>
                <button  className='signupBtn'>SignUp</button>
            </div>
        </form>
    </div>
  )
}

export default Form