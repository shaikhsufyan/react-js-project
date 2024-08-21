import React, { useEffect, useState } from 'react'

const Pagi2 = () => {
    const [data,setData] = useState([])
    const [num, setNum] = useState(1)
    
    const getData = async() =>{
        try{
            const response = await fetch(`https://picsum.photos/v2/list?page=${num}&limit=5`);
            const data = await response.json();
            setData(data)
             console.log(response);
             
             
        }catch(err){
            console.log(err);
            
        }
        
    }
    useEffect(()=>{
        console.log(num);
        
        getData()
    },[num])

    
  

    const showData = (even) =>{
        setNum(even.target.value)
    }

    const next = ()=>{
        const add = num+1;
        setNum(add)
    }
  return (
    <div>

    <div className='imgs'>
    {data.map((curItem, ind)=>{
        return(
            <div key={ind} >
                <img src={curItem.download_url}/>
            </div>
        )
    })}
    </div>
     
     <div className='btns'>
     <button onClick={showData} value={1}>1</button>
    <button onClick={showData} value={2}>2</button>
    <button onClick={showData} value={3}>3</button>
    <button onClick={showData} value={4}>4</button>
    <button onClick={next}>Next</button>
     </div>

    </div>
  )
}

export default Pagi2