import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [data, setData] = useState();
    const [pages, setPages] = useState();
    const [num, setNum] = useState(1)
    const [limit, setLimit] = useState(10)
    const getData = async() =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        console.log(data.length/10);
        setData(data.slice(num*limit-limit,num*limit))
        setPages(data.length/10)
    }

    useEffect(()=>{
        getData()
    },[num])
      

    
    const goForword = () =>{
        console.log(num);
        console.log(pages);
        
        if(num < pages){
         setNum(num+1)
        } else{
            alert("No Data avalaible")
        }   
    }
    const nums = [];
         for(let i=1; i<=pages; i++){
            nums.push(i)
            
        }
        
        const buttonValue = (curValue) =>{
            setNum(curValue)
             
        }
     
const a = 0
    
  return (
    <div>
        {data? <div className='container'>
        {data.map((cur,id)=>{
            return <div key={id} className='box'>
                <p>{cur.id}</p>
                <p>{cur.title}</p>

            </div>
        })}
        </div> : ""}

         <div className='btns'>
         
         <button onClick={()=> num===1  ? alert("No Data") : setNum(num-1) }>Pre</button>
         {
          nums.map((cur, ind)=>{
            
            return(
                <div>
                    <button  className={num===cur?"button_page":""}  onClick={()=>buttonValue(cur)}  value={cur} > {cur}</button>
                </div>
            )
          })
         }
         <button onClick={()=> num<pages? setNum(num+1) : alert("No Data Available")}>Next</button>

         </div>
    </div>
  )
}

export default Pagination