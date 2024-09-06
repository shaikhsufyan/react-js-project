import React, { useState } from 'react'

const Otp = () => {
    const [inputBox, setInputBox] = useState(new Array(4).fill(""));
 
     
    const handleInput = (e ) =>{
        console.log(e.target.value);
        
    }

  return (
    <div>
        {inputBox.map((curValue, index)=>{
            return(
                <input type='text' key={index} value={curValue} onChange={handleInput(e,index)} />
            )
        })}

    </div>
  )
}

export default Otp