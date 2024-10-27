import React, { useState } from 'react'

const Bmi = () => {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmiResult, setBmiResult] = useState()
    const [msg, setMsg] = useState()

    const handleInput = (event) =>{
         
        if(event.target.name === 'weight'){
            setWeight(event.target.value)
        }
        if(event.target.name === 'height'){
            setHeight(event.target.value)
        }
        
    }
    console.log(weight);
    console.log(height);

    const calculateBmi = () =>{
        // Formula BMI = weight/m*m
        // 1 feet = 0.3048

        let meter = height*0.3048;
        let meterSquare = meter*meter;
        let bmi = (weight/meterSquare).toFixed(2    );
        console.log(bmi);
        
        setBmiResult("Your BMI is :",bmi)
        setBmiResult(`Your BMI is : ${bmi}`)

        if(bmi <= 18){
            setMsg("You are Underweight")
        }
        if(bmi >= 18 && bmi < 25){
            setMsg("You are Normal Weight")
        }
        if(bmi >=25 && bmi < 30){
            setMsg("You are Overweight")
        }
        if(bmi >=30){
            setMsg("You are Obesity ")
        }
    }

    const reloadBtn = () =>{
        window.location.reload()
    }
    console.log("LOG",setBmiResult);
    
    
  return (
    <div className='container'>
      <div className='heading'>
        <h1>BMI Calculator</h1>
      </div>
      <div className='inputs'>
           <p className='weight'>Enter your weight in (Kg)</p>
           <input type='text' placeholder='Weight' name='weight' onChange={handleInput}/>
           <p className='height'>Enter your height in (Feet)</p>
           <input type='text' placeholder='Height' name='height'  onChange={handleInput}/>
      </div>
      
      <div>
        <button className='calculateBtn' onClick={calculateBmi}>Calculate</button>
        <button className='reloadBtn' onClick={reloadBtn}>Reload</button>
      </div>
      <div className='result'>
        <p>{bmiResult}</p>
        <p>{msg}</p>
      </div>
    </div>
  )
}

export default Bmi