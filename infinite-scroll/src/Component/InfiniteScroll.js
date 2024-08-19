import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ClipLoader } from 'react-spinners';

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false)

    const loaderRef = useRef();
    const getData = async(page) =>{
        try{
             const url = `https://picsum.photos/v2/list?page=${page}&limit=10`;
             const res = await fetch(url);
             const data = await res.json();
             return data
              
             

        }catch(err){
            console.log(err);
            
        }
        
    }

    const loadMore = useCallback( async()=>{
        if(loading)
            return
        setLoading(true);
        const datas = await getData(page)
        setData((preData)=>[...preData, ...datas])
       
        setTimeout(()=>{
            setLoading(false)
        },4000)
        setPage((prePage)=>prePage+1)
    },[page,loading])

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            console.log(entry);
            
            if(entry.isIntersecting){
                loadMore()

            }
   
        })
         
        if(loaderRef.current){
            observer.observe(loaderRef.current)
        }

        return ()=>{
            if(loaderRef.current){
                observer.unobserve(loaderRef.current);
            }
        }
    },[])



    const firstPage = async() =>{
        const datas = await getData(1);
        console.log(datas);
        setData(datas)
        
    }
    useEffect(()=>{
        firstPage()
    },[])

  return (
    <div>
        <div className='images'>
            {data ? data.map((curItem, index)=>{
                return(
                    <div key={index}>
                        <img src={curItem.download_url}/>
                    </div>
                )
            }) : ""}
        </div>

        <div style={{textAlign:"center"}} ref={loaderRef}>{loading? <ClipLoader  loading={true} color="blue" size="55px" cssOverride={{margin:33}} /> : ""}</div>
    </div>
  )
}

export default InfiniteScroll