import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';
import { NavLink,Route,Routes } from 'react-router-dom';
import Cards from './Cards';

const Food = () => {

    const [search, setSearch] = useState("");
    const [data,setData] = useState()
    const [msg, setMsg] = useState("Search and Get Recipe's")

    const handleInput = (event) =>{
        setSearch(event.target.value);
    }

    const myFun = async () =>{
         
        if(search === ""){
            setMsg("Please Enter Something")
        }else{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        console.log(jsonData.meals);
        setData(jsonData.meals)
        setMsg("Your Search Result's")
         
        }
         
    }
     
    
  return (
    <>
         <h1 className='head'>FOOD RECIPE APP</h1>
        <div className='container'>
            <div className='searchBar'>
                <input placeholder='Search Meals' type='text' onChange={handleInput}/>
                <button onClick={myFun}>Search</button>
            </div>
            <h2 className='msg'>{msg}</h2>
             <div>
             <Cards detail={data}/>
             </div>
        </div>
    </>
  )
}

export default Food