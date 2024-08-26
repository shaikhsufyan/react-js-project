import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [store, setStore] = useState()
    
    const getData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data);
            setStore(res.data)
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    // const getData = async() =>{
    //     try{
    //         const respone = await axios.get("https://jsonplaceholder.typicode.com/user");
    //         console.log(respone);
    //     }catch(err){
    //         console.log(err);
            
    //     }
    // }

    useEffect(()=>{
        getData()
    },[])
   

  return (
    <div>
    
    </div>
  )
}

export default Axios