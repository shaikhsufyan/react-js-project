import React, { useState } from 'react'

const Bmi = () => {
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState();
    const [bmiResult, setBmiResult] = useState()
    const [msg, setMsg] = useState();

    const handleInput = (event) =>{
       
        if(event.target.name == 'weight'){
            setWeight(event.target.value)
        }
        if(event.target.name == 'height'){
            setHeight(event.target.value)
        }
    }
    
    const calculate = () =>{
        // Formular BMI = weight/m*m
        // 1 feet = 0.3048
        let meter = height*0.3048;
        let meterSquare = meter*meter;
        let bmi = (weight/meterSquare).toFixed(2);
        console.log(bmi);
        setBmiResult(`You BMI is : ${bmi}`)
        if(bmi < 18){
            setMsg("You are Underweight")
        }
        if(bmi >=18 && bmi <25){
            setMsg("You are Normal Weight")
        }
        if(bmi >= 25 && bmi < 30){
            setMsg("You are Overweight")
        }
        if(bmi >=30){
            setMsg("You are Obesity")
        }
    }
    
    const reloadBtn = () =>{
        window.location.reload()
    }
    
  return (
    <div className='container'>
      <div className='heading'>
        <h1>BMI Calculator</h1>
      </div>
      <div className='inputs'>
        <p>Enter your weight (Kg)</p>
        <input type='text' placeholder='Weight' name='weight' onChange={handleInput}/>
         <div className='height'>
         <p>Enter your Height (Feet)</p>
         <input type='text' placeholder='Height'  name='height' onChange={handleInput}/>
         </div>
      </div>
      <div className='btns'>
        <button onClick={calculate}>Calculate</button>
        <button className='reloadBtn' onClick={reloadBtn}>Relode</button>
      </div>
      <div className='result'>
        <p>{bmiResult}</p>
        <p>{msg}</p>

      </div>
    </div>
  )
}

export default Bmi