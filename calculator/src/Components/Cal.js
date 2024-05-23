import React, { useState } from "react";

const Cal = () =>{
    const [data, setData]=useState("")
    
    const click = (event) =>{
        setData(data.concat(event.target.value))
        
    }

   
    const sum = () =>{
        try{
        setData(eval(data).toString())
        }catch(error){
        alert("Enter valid Number")
       }
         
     }
     const clear = () =>{
        setData("")
         
      } 
      const back = () =>{
         setData(data.slice(0, -1))
          
       }
    
    return(
        <>
         <div className="container">
         <div className="input">
         <input type="text" value={data} placeholder="0"/>
            
         </div>
         <br/>


               <div className="btns">
               <button value="(" onClick={click}>(</button>
                <button value=")" onClick={click}>)</button>
                <button value="%" onClick={click}>%</button>
                <button value="AC" onClick={clear}>AC</button>

                <button value="7" onClick={click}>7</button>
                <button value="8" onClick={click}>8</button>
                <button value="9" onClick={click}>9</button>
                <button value="*" onClick={click}>*</button> 

                <button value="4" onClick={click}>4</button>
                <button value="5" onClick={click}>5</button>
                <button value="6" onClick={click}>6</button>
                <button value="-" onClick={click}>-</button>  

                <button value="1" onClick={click}>1</button>
                <button value="2" onClick={click}>2</button>
                <button value="3" onClick={click}>3</button>
                <button value="+" onClick={click}>+</button>  
                
                 
                 
                <button value="0" onClick={click}>0</button>  
                <button value="Back" onClick={back}>Back</button>
                <button className="equal" value="=" onClick={sum}>=</button>
                <button value="/" onClick={click}>/</button> 
 
               

               </div>



            
         </div>
        </>
    )
}

export default Cal;