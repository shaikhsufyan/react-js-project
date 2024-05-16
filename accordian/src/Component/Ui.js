import React, { useState } from 'react'
 


const Ui = ({curElem}) => {
    const [data, setData] = useState(false);

    const showHide = () =>{
        setData(!data)
    }
  return (
   <>
    
    <div className='accordian'>
        <div className='ques'>
           <button onClick={showHide}>{data ?  <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus" i/> }</button>
           <h3>{curElem.q}</h3>
        </div>
        <p>{data ? curElem.ans : "" }</p>
    </div>
   </>
  )
}

export default Ui