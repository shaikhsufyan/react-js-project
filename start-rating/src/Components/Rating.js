 import React, { useState } from 'react'
 
 const Rating = () => {
    const [rating, setRating] = useState();
    const [hover, setHover] = useState(0)
    console.log(rating);
    
    let arr = new Array(5).fill(0);
    
    
   return (
     <div>
     <div className='head'>
        <h1>Star Rating</h1>
        <p>Please Rate Us</p>
     </div>
        <div className='container'>
        {
            arr.map((curValue, index)=>{
                return(
                    <span
                    className={hover == 0 && index<rating || index<hover ?"colored":"unColor"}
                    onClick={()=>setRating(index+1)}
                    onMouseEnter={()=>setHover(index+1)}
                    onMouseLeave={()=>setHover(0)}
                     key={index}>&#9733;</span>
                )
            })
        }
     </div>
     </div>
   )
 }
 
 export default Rating