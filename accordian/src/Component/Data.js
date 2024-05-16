import React from 'react'
import { api } from './Datas';
import Ui from './Ui';
// import Datas from './Datas';

const Data = () => {
    console.log(api);
  return (
    <>
      <div>
      <h1 className='heading'>FAQ's</h1>
        {
            api.map((curElem)=>{

                return   <Ui curElem={curElem} key={curElem.id}/>
                
            })
        }
      </div>
    </>
  )
}

export default Data