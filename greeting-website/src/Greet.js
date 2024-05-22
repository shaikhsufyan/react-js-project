
import React, { useState } from 'react'
import morning from "./images/morning.png"
import sun from "./images/sunny.png"
import cloud from "./images/cloud.png"
import moon from "./images/moon.png"


const Greet = () => {
    const [status, setStatus] = useState();
  
    let date = new Date();
    let currentDate = date.toLocaleTimeString();

    setInterval(() => {
        let date = new Date();
        let currentDate = date.toLocaleTimeString();
        setStatus(currentDate)
    }, 1000)

    let hour = date.getHours()
    let msg;
    let image;
 
    if(hour > 5 && hour < 12){
        msg="GOOD MORNING"
        
        image=morning
    }
    if(hour >= 12 && hour< 18){
        msg="GOO AfterNoon"
        image=sun
    }
    if(hour >= 18 && hour < 22 ){
        msg="GOOD Evening"
        image=cloud
    }
    if(hour >= 22){
        msg = "GOOD NIGHT"
        image=moon

    }
    if(hour < 5){
        msg="GOOD NIGHT"
        image=moon
    }

    return (
        <>
            <div className='container'>  
                <h2>Greeting Website</h2> 
                <h1 className='time'>{status}</h1>
                <p>{msg}</p>
                <img src={image}/>
            </div>
        </>
    )
}

export default Greet