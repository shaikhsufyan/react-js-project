import React from 'react'
import pro1 from "../images/pro1.jpg"
import pro2 from "../images/pro2.webp"
import pro3 from "../images/pro3.jpg"


const Programs = () => {
  return (
    <>
         <div class="pro" id="program">
            <div class="head">
                <h1>Our <span>Programs</span></h1>
            </div>
            <div class="program">
                <div class="proCard">
                    <img src={pro1}alt="" />
                    <h2>Dance</h2>
                </div>
                <div class="proCard">
                    <img src={pro2}alt="" />
                    <h2>Cardi0</h2>
                </div>
                <div class="proCard">
                    <img src={pro3} alt="" />
                    <h2>Heavy Workout</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Programs