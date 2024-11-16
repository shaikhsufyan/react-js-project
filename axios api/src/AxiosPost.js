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

    
    const handleSubmit = (evnt) =>{
        evnt.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/todos",inputData)
        .then((res)=>{
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    const handleUpdate = (e) =>{
        e.preventDefault()
        axios.put("https://jsonplaceholder.typicode.com/todos/1",inputData)
        .then((res)=>{
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }
    const handleDelete = (e) =>{
        e.preventDefault()
        axios.delete("https://jsonplaceholder.typicode.com/todos/1")
        .then((res)=>{
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

  return (
    <div>
        <form >
            <input type='text' placeholder='Enter Name' name='fname' onChange={handleInput}/>
            <input type='text' placeholder='Enter Last Name' name='lname' onChange={handleInput}/>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>

        </form>
    </div>
  )
}

export default AxiosPost