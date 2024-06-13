import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';
import { NavLink,Route,Routes } from 'react-router-dom';
import Cards from './Cards';

const Food = () => {

    const [search, setSearch] = useState();
    const [data,setData] = useState()
    // const [recipeData, setRecipeData] = useState();
     

    const handleInput = (event) =>{
        setSearch(event.target.value);
    }

    const myFun = async () =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        console.log(jsonData.meals);
        setData(jsonData.meals)
    }
     
    
  return (
    <>
     
        <div className='container'>
            <div className='searchBar'>
                <input placeholder='Search Meals' type='text' onChange={handleInput}/>
                <button onClick={myFun}>Search</button>
            </div>
             <div>
             <Cards detail={data}/>
             </div>
        </div>
    </>
  )
}

export default Food