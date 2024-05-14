import React from 'react'
import {data} from "../Components/Datas"
import Ui from './Ui';

const Accor = () => {
    console.log(data);
  return (
    <>
        {
            data.map((curElem, index)=>{
                 return <Ui curElem={curElem} key={curElem.id} />
            })
        }
    </>
  )
}

export default Accor