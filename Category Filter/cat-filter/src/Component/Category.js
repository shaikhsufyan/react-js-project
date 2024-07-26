 import React, { useState } from 'react'
import Navbar from './Navbar'
import { AllData } from './Datas'
 
 const Category = () => {
    const [data, setData] = useState(AllData);
    const [inputVal, setInputVal] = useState("");

    const selectItem = (event) =>{
        console.log(event.target.value);
        setInputVal(event.target.value)
    }

    if(inputVal == "Product A to Z"){
        data.sort((a,b)=>{
            let nameA = a.name;
            let nameB = b.name;

            if(nameA < nameB){
                console.log(nameA);
                console.log(nameB);

                return -1;

            }

        })
    }
    if(inputVal == "Product Z to A"){
        data.sort((a,b)=>{
            let nameA = a.name;
            let nameB = b.name;

            if(nameA > nameB){
                console.log(nameA);
                console.log(nameB);

                return -1;

            }

        })
    }

    if(inputVal == "Price High to Low"){
        data.sort((a,b)=>{
            return b.price - a.price

        })
    }
    if(inputVal == "Price Low to High"){
        data.sort((a,b)=>{
            return a.price - b.price

        })
    }

   return (
     <div className='container'>
     <Navbar/>
     <div className='category'>
        <div>
         <label>Category :</label>
         <select onChange={selectItem} id='select'>
            <option value="Product A to Z">Product A to Z</option>
            <option value="Product Z to A">Product Z to A</option>
            <option value="Price High to Low">Price High to Low</option>
            <option value="Price Low to High">Price Low to High</option>

        </select>
        </div>
     </div>
     <div className='product'>
        {
         data.map((cur,index)=>{
            return(
                <div className='card' key={index}>
                    <img src={cur.img}/>
                    <div className='text'>
                        <p>Model : {cur.name}</p>
                        <p>Price : {cur.price}</p>

                    </div>
                </div>
            )
         })   
        }
     </div>

     </div>
   )
 }
 
 export default Category