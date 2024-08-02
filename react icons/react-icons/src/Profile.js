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
        <BsApple/>
        <BsAlarmFill/>
        <FaAmazon/>
        <MdAdb/>
        </div>
    </div>
  )
}
 
export default Profile