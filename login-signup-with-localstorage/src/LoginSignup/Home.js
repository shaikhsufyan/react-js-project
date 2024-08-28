import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("user");
        navigate("/")
    }
  return (
    <div>
    <Navbar/>
        <div className='home'>
            <h2>Wellcome Home Page</h2>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Home