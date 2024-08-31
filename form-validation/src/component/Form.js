 import React, { useState } from 'react'
 import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

 const Form = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();
console.log(name);
console.log(email);

const handleSubmit = (event) =>{
    event.preventDefault();
    if(name && email && password && confirmPass){
        
        if(password === confirmPass){
            toast.success("Sign Up Successfully")
            
        }else{
            toast.error("ERR : Password & ConfirmPassword Must be SAME !")
        }
    }else{
        toast.error("All Fields are Mandatory")
    }
}

   return (
     <div> 
     <form onSubmit={handleSubmit}>
     <p className='heading'>Sign Up</p>
        <div>
            <p className='fieldName'>Name</p>
            <input type='text' onChange={(event)=>setName(event.target.value)}/>
            <p className={name?"data":"noData"}>{name? "" : "Name is required"}</p>
        </div>
        <div>
            <p className='fieldName'>Email</p>
            <input type='email' onChange={(event)=>setEmail(event.target.value)} />
            <p className={email?"data":"noData"}>{email? "" : "Email is required"}</p>
        </div> 
        <div>
            <p className='fieldName'>Password</p>
            <input type='password' onChange={(event)=>setPassword(event.target.value)} />
            <p  className={password?"data":"noData"}>{password? "" : "Password is required"}</p>
        </div>
        <div>
            <p className='fieldName'>Confirm Password</p>
            <input type='password' onChange={(event)=>setConfirmPass(event.target.value)}/>
            <p  className={confirmPass?"data":"noData"}>{confirmPass? "" : "Confirm Password is required"}</p>
        </div>
        <div>
            <button>Sign Up</button>
        </div>
     </form>
     </div>
   )
 }
 
 export default Form