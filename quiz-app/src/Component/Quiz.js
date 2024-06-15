import React, { useEffect, useState } from 'react'
import { Data } from './Data';

const Quiz = () => {
    const [data, setData] = useState(Data);
    const [ans, setAns] = useState()
    const [num, setNum] = useState(0);
    const [score, setScore] = useState(0)
    
    const next = () =>{
         
        
        if(num+1 < data.length ){
            setNum(num+1)
        }else{
            const scoreCard = document.querySelector(".score").innerHTML=`<p>Your Score : ${score}/5</p>`  
            
            document.querySelector(".quiz").innerHTML=""
             const button = document.querySelector("#next");
             button.innerHTML="Play Again";
             button.classList.add("reset")
             
             const resetBtn = document.querySelector(".reset");
            resetBtn.addEventListener("click", () =>{
                window.location.reload()
            })
        }
        const checkedValue = document.querySelectorAll(".checkedValue");
        checkedValue.forEach((curVal)=>{
             curVal.checked=false;
        })

    }

     

    const handleInput = (event) =>{
        console.log(event.target.value);
        setAns(event.target.value)
    }
    useEffect(()=>{
        if(ans === data[num].ans){
            setScore(score+1)
        }else{
            setScore(score)

        }
    },[ans])

   
   
  return (
    <div className='container'>
        <h1 className='head'>QUIZ APP</h1>

         <div className='quiz'>
            <h1>Q : {data[num].q}</h1>

            <div className='option'>
            <input type='radio' name='select' onChange={handleInput} className="checkedValue" value={data[num].a}/>
            <p>{data[num].a}</p>
            </div>

            <div className='option'>
            <input type='radio' name='select' onChange={handleInput} className="checkedValue" value={data[num].b}/>
            <p>{data[num].b}</p>
            </div>

            <div className='option'>
            <input type='radio' name='select' onChange={handleInput} className="checkedValue" value={data[num].c}/>
            <p>{data[num].c}</p>
            </div>

            <div className='option'>
            <input type='radio' name='select' onChange={handleInput} className="checkedValue" value={data[num].d}/>
            <p>{data[num].d}</p>
            </div>

            
             
             
         </div> 
         <div className='score'></div>
         <div className='btns'>
                
                <button id='next' onClick={next}>Next</button>
            </div>
          
             

    </div>
  )
}

export default Quiz