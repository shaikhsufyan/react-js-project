import React, { useState } from 'react'

const Count = () => {
    const [time, setTime] = useState({hr:0,min:0,sec:0})
    const [status, setStatus] = useState();
    let updHr=time.hr;
    let updMin=time.min;
    let updSec=time.sec;

    const start = () =>{
        setStatus(
            setInterval(()=>{
                myFun()
            },0) 
        )
    }
    const hour = (event)=>{
        setTime(...time,{hr:event.target.value })
    }
    const second = (event)=>{
        setTime({sec:event.target.value })
    }
    const minute = (event)=>{
        setTime({min:event.target.value })
    }
    const myFun = () =>{
        if(updSec === 0){
            updMin--;
            updSec=60
            if(updHr === 0){
                updSec=0
            }
        }
        if(updMin === 0){
            updHr--;
            updMin=60
            if(updHr === 0){
                updMin=0
            }
        }
        if(updHr == 0){
            alert("Timer Expire")
             
        }
        updSec--;
        return setTime({hr:updHr,min:updMin,sec:updSec})
    }
    const stop = () =>{
        clearInterval(status)
    }
    const reset = () =>{
         setTime({hr:5,min:60,sec:60})
    }

  return (
    <>
        <div className='container'>
            <h2>{time.hr+" : "+time.min+" : "+time.sec}</h2>
            <input placeholder='Hr' type='text' onChange={hour} />
            <input placeholder='Hr' type='text'  onChange={second}/>
            <input placeholder='Hr' type='text'  onChange={minute}/>

            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>

        </div>
    </>
  )
}

export default Count