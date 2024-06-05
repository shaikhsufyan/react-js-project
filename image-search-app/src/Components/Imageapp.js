// API =https:/api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${API_KEY}
// https://api.unsplash.com/photos/users/ashbot/likes?page=1
import React, { useState } from 'react'
 
const Imageapp = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);

  let API_KEY = "uGj5mxmIILPu8Aci9nVMCYDvbU_NEM177EFymc_oZMo"
  const handleSearch = (event) =>{
    setSearch(event.target.value)

  }
  const getData = () =>{
    myFun(search)
  }
  const myFun = async(searchVal) =>{
    const get = await fetch(`https:/api.unsplash.com/search/photos?page=1&query=${searchVal}&client_id=${API_KEY}`);
    const jsonData  = await get.json()
    
    setData(jsonData.results)

  }
   
 

  
  //  console.log(data);
  return (
     <>
        <div className='container'>
        <h1>Image Search App</h1>
          <div className='inputs'>
            <input type='text' placeholder='Search Images..' onChange={handleSearch}/>
            <button onClick={getData} >Search</button>
          </div>
          <div className='images'>
          {
            data.map((curVal, index)=>{
              {/* console.log(curVal.urls.full) */}
              return(
                  <img src={curVal.urls.full}/>
              )
            })
          }

          </div>
        </div>
     </>
  )
}

export default Imageapp                                        