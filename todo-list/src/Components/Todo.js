 import React, { useState } from 'react'
 
 const Todo = () => {
    const [initial, setInitial] = useState("");
    const [data, setData] = useState([])

    const getInputs = (event) =>{
        console.log(event.target.value);
        setInitial(event.target.value)
    }
    const getData = () =>{
        console.log(initial);
        if(initial == ""){
            alert("Please Enter Task !")
        }else{
            let storeData = [...data,initial]
            setData(storeData)
            setInitial("")
        }
        

        
    }
    console.log(data);

    const deleteItem = (index) =>{
        console.log(index);
       let filterData = data.filter((curElem, id)=>{
            return id !== index
        })
        setData(filterData)
    }
   return (
      <>
        <div className='container'>
        <h1>To Do List</h1>
            <div className='taskInput'>
                <input type='text' placeholder='Enter Your Task' value={initial} onChange={getInputs}/>
                <button onClick={getData}>Add</button>
            </div>
            {data !=[] && data.map((curVal,index)=>{
                return (
                    <>
                        <div className='taskData'>
                            <p>{curVal}</p>
                            <i id="deleteIcon" onClick={()=>deleteItem(index)} className="fa-solid fa-trash"></i> 
                        </div>
                    </>
                )
            })}
        </div>
      </>
   )
 }
 
 export default Todo