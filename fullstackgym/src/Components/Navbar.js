import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Trainers from "./Trainers";
import Main from "./Main";
import GymMember from "./GymMember";

const Navbar = () => {
  const API = "https://gym-api-2.onrender.com/users";
    const [member, setMember] = useState([]);

    const showUser = async () =>{
        const users = await fetch(API);
        const jsonData = await users.json();
        console.log(users);
        if(jsonData.length>0){
          setMember(jsonData)
        }   
    }

    
      const showMem = () =>{
        showUser()
        document.querySelector(".members").style.display="block"
      }
   
      
   
console.log(member);
    
  return (
    <>
      <nav> 
        <div className="logo">
          <h1>Fit N Fine</h1>
        </div>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trainer">Trainer</NavLink>
          <NavLink to="/program">Program</NavLink>
          <NavLink to="/slider">Slider</NavLink>
          <div className="btns">
          <button className="signupNav"><NavLink to="/signup" >SignUp</NavLink></button>
          <button className="loginNav"><NavLink to="/login">LogIn</NavLink></button>
          <button className="memberBtn" onClick={showMem}>Memebers</button>
          
          </div>
        </ul>
        <GymMember user={member} />
        <i id="bar"   class="fa-solid fa-bars"></i>
      </nav>
      
 
  
    </>
  );
};

export default Navbar;
