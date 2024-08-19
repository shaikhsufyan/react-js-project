import React, { useCallback, useEffect, useState } from 'react'

const Scroll = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState();

    const fetchData = async(page) =>{
      
        
        const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`;

        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setData(data)
         
    }

    const moreData =  useCallback(async()=>{
        //  if(loading)
        //     return
        // setLoading(true)
        // const datas = await fetchData(3);
        // setData(datas)
        // setLoading(false)
        const datas = await fetchData(page);
        setData((preData)=>[...preData, ...datas])
        setPage(page+1)
    },[page,loading])

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const target = entries[0]
            if(target.isIntersecting){
                console.log(target.target);
                console.log("SEEE");
                moreData()
                
                 
            }
        })

        const targetElement = document.querySelector(".target-element");
        observer.observe(targetElement)

        return ()=>{
            observer.disconnect()
        }
    })

    useEffect(()=>{
        fetchData(page);
    },[])
  return (
    <div>
    <div className='images'>
    {data.map((cur, ind)=>{
        return(
            <div> 
             <p>{cur.id}</p>
            <img src={cur.thumbnailUrl} alt={cur.thumbnailUrl} key={ind}/>
            </div>
        )
    })}
    </div>

    <div className='target-element'></div>
    </div>
  )
}

export default Scroll