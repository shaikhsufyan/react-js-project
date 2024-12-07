import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [data,setData] = useState([])

    const getData = async() =>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            console.log(data);
            setData(data)
            
        }catch(err){
            console.log(err);
            
        }
        
    }

    useEffect(()=>{
        getData()
    },[]);

  return (
    <div>
        {data ?  
         data.map((curVal)=>{
            console.log(curVal);
            return <div className='card'>
                <h3>Tittle : {curVal.title}</h3>
                <p>Body : {curVal.body}</p>
            </div>
         })
         : <p>Data Not Found</p>}
    </div>
  )
}

export default FetchApi