import React from 'react'
import Signup from './Signup'

const Home = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <a className='head'>Start Working!</a>
                    <a>HOME</a>
                    <a>PRODUCTS</a>

                </li>
            </ul>

        </nav>

        <Signup/>
    </div>
  )
}

export default Home