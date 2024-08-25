import axios from 'axios'
import React, { useState } from 'react'

const AxiosPost = () => {
    const data = {
        fname:"",
        lname:""
    }
    const [inputData, setInputData] = useState(data)

    const handleInput = (event)=>{
        console.log(event.target.value);
        setInputData({...inputData, [event.target.name]:event.target.value})
        
    }
    console.log(inputData);

    
    const handleForm = (evnt) =>{
        evnt.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/todos",inputData)
        .then((res)=>{
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <input type='text' placeholder='Enter Name' name='fname' onChange={handleInput}/>
            <input type='text' placeholder='Enter Last Name' name='lname' onChange={handleInput}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default AxiosPost