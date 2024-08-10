import React from 'react'
import { BsApple,BsAlarmFill} from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";
import { MdAdb } from "react-icons/md";


const Profile = ({img}) => {
  return (
    <div className='container'>
        <img src={img}/>
        <p>Diana</p>
        <div className="icons">
        <BsApple style={{color:"#2979FF"}}/>
        <BsAlarmFill style={{color:"#2979FF"}}/>
        <FaAmazon style={{color:"#2979FF"}}/>
        <MdAdb style={{color:"#2979FF"}}/>
        </div>
    </div>
  )
}
 
export default Profile