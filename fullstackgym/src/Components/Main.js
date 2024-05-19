import React from 'react'
import  men from "../images/men.png"
import Trainers from './Trainers'
import Slider from './Slider'
import Programs from './Programs'


const Main = () => {
  return (
    <>
         <div class="main">
            <div class="mainText">
                <h1>Let's Take First <br/> Step</h1>
                <h2>30% Off On Membership</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing  <br/>
                    elit. Ex rem tempore sapiente nobis ad!</p>
                <button id="start">Let's Start</button>
            </div>
            <img src={men} alt="img"/>
            
        </div>
        <Trainers/>
            <Slider/>
            <Programs/>
    </>
  )
}

export default Main