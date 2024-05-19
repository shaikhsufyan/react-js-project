import React from 'react'
import slide1 from "../images/slide1.jpg"
import slide2 from "../images/slide2.jpg"
import slide3 from "../images/slide3.webp"
import slide4 from "../images/slide4.webp"
import slide5 from "../images/slide5.jpg"
import slide6 from "../images/slide6.jpg"
import slide7 from "../images/slide7.jpg"
import slide8 from "../images/slide8.jpg"
import slide9 from "../images/slide4.webp"


const Slider = () => {
  return (
    <>
        <div id="trends"  >
            <div class="head">
                <h1>Limited Stocks</h1>
            </div>
            <div class="slides">
                <div class="slideCard">
                    <img src={slide1}alt="" />
                    <img src={slide2}alt="" />
                    <img src={slide4} alt="" />

                </div>
                <div class="slideCard">
                    <img src={slide3} alt="" />
                    <img src={slide5}alt="" />
                    <img src={slide6}alt="" />

                </div>
                <div class="slideCard">
                    <img src={slide7}alt="" />
                    <img src={slide8}alt="" />
                    <img src={slide9} alt="" />

                </div>
                <div class="slideCard">
                    <img src={slide2} alt="" />
                    <img src={slide4}alt="" />
                    <img src={slide6}alt="" />

                </div>
            </div>
        </div>
    </>
  )
}

export default Slider