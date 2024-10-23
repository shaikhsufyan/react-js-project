 import React from 'react'
 
 const Progress = ({progress, color}) => {

    const styleObj = {
        width : `${progress}%`,
        height : "30px",
        backgroundColor:color,
        borderRadius:"26px"
    }
   return (
     <div className='container'>
        <div style={styleObj}>
            {`${progress}%`}
            
        </div>
     </div>
   )
 }
 
 export default Progress