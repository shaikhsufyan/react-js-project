 import React, { useEffect, useRef, useState } from 'react'
 
 const Otp = () => {
    const [inputs, setInputs] = useState(new Array(4).fill(""));
    const [inputArr, setInputArr] = useState(inputs)
    const [msg, setMsg] = useState(false)

    console.log(inputArr);

    const refs = [useRef(),useRef(),useRef(),useRef()];

    const handleInput = (event,index) =>{
        console.log(event.target.value);
        const val = event.target.value;

        if(!Number(val))
        return;
      
        const copyArray = [...inputArr];
        copyArray[index] = val
        setInputArr(copyArray)
        
        if(index < inputArr.length-1){
            refs[index+1].current.focus()
        }
         
        
    }

    const handleKey = (event,index) =>{
        console.log(event.keyCode);
        if(event.keyCode == 8){
            const copyArray = [...inputArr]
            copyArray[index]=""
            setInputArr(copyArray)

            if(index > 0){
            refs[index-1].current.focus()
            }
             
        }
        if(index < inputArr.length-1){
            if(event.keyCode == 39){
                refs[index+1].current.focus()
            }
        }
         
        if(index > 0){
            if(event.keyCode == 37){
                refs[index-1].current.focus()
            }
        }
       
        
    }

    const handlePaste = (event) =>{
        const data = event.clipboardData.getData("text");
        console.log(data);

        const dataArray = data.split("")
        setInputArr(dataArray)

        refs[inputArr.length-1].current.focus()
        
    }

    const handleSubmit = () =>{
        inputArr.map((curvalue, index)=>{
            if(curvalue == ""){
                setMsg(false)
            }else{
                setMsg(true)
            }
        })
    }

    useEffect(()=>{
         refs[0].current.focus()
    },[])
   return (
     <div className='container'>
     <h1>OTP Fields</h1>
     <h3>{msg? "Verified!":"Plese Fill All Inputs"}</h3>
     {inputs.map((curValue, index)=>{
        return  <input maxLength="1" ref={refs[index]} value={inputArr[index]} 
        key={index} type='text' 
        onPaste={handlePaste}
        onKeyDown={(event)=>handleKey(event,index)}
        onChange={(event)=>handleInput(event,index)}/>
     })}
     
     
     <br/>
     <button onClick={handleSubmit}>Verify OTP</button>
     </div>
   )
 }
 
 export default Otp