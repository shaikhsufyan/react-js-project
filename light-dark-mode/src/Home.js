import React, { useEffect, useState } from "react";

const Home = ( ) =>{
    const [state, setState] = useState("light-mode");

    const change = () =>{
        if(state === "light-mode"){
            setState("dark-mode")
        }else{
            setState("light-mode")
        }
    }
    useEffect(()=>{
        document.querySelector("body").className=state
    },[state])
       
    return(
        <>
            <div>
            <nav>
                <div>
                    <h1>CODE</h1>
                </div>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>LOGIN</li>
                    <div className="icon" onClick={change}>{state == "light-mode" ?  <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i> }</div>
                    
                </ul>
            </nav>

            <div className="main">
                 <div class="mainText">
                <h1>Trend's With Generation</h1>
                <h3>Shop Now Exciting Offer's</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  
                    Unde suscipit saepe, ipsam obcaecati, tempor iure placeat  
                    quasi eum atque voluptatem alias ullam!</p>
                <button>Shop Now</button>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1398610798/photo/young-woman-in-linen-shirt-shorts-and-high-heels-pointing-to-the-side-and-talking.jpg?s=612x612&w=0&k=20&c=JULY1xsUtiur9QPMxqrzgC2VbnhuT4dSnHWcpFQnuAQ="/>
                </div>
            </div>
            </div>
        </>
    )
}
export default Home;