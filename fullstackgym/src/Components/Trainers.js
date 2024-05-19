import React from 'react'
import train1 from "../images/train1.jpg"
import train2 from "../images/train2.jpg"
import train3 from "../images/train3.webp"


const Trainers = () => {
  return (
    <>
          <div class="crd" id="trainer">
            <div class="head">
                <h1>Train With <span>Top Trainer</span></h1>
            </div>

            <div class="train">
                <div class="card">
                    <img src={train1} alt="" />
                    <div class="trainText">
                        <h2>Learn From the Best</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eum voluptatum.                        </p>
                        <a href="https://www.youtube.com/@YatinderSinghOfficial">Click & Learn</a>
                    </div>
                </div>
                <div class="card">
                    <img src={train2} alt="" />
                    <div class="trainText">
                        <h2>Learn From the Best</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eum voluptatum.                        </p>
                        <a  href="https://www.youtube.com/@YatinderSinghOfficial">Click & Learn</a>
                    </div>
                </div>
                <div class="card">
                    <img src={train3} alt="" />
                    <div class="trainText">
                        <h2>Learn From the Best</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eum voluptatum.                        </p>
                        <a  href="https://www.youtube.com/@YatinderSinghOfficial">Click & Learn</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Trainers