import React from 'react'
import logo from "../images/user.png"

const GymMember = ({user}) => {
    console.log(user);
    const hide = () =>{
        document.querySelector(".members").style.display="none"
    }
  return (
    <>
    <div className='members'>
    <i onClick={hide}  class="fa-solid fa-xmark"></i>
    <h2 className='headMember'>Our Members</h2>
        {
            user.map((curVal,arr)=>{
                return <>
                <img className='logo' src={logo} alt='img'/>
                <p> {curVal.name}</p>
                <p> {curVal.email}</p>

                </>  
                     

            })
        }
    </div>
    </>
  )
}

export default GymMember