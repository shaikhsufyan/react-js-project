import React, { useState } from 'react'
import Square from './Square';
import { logDOM } from '@testing-library/react';

const Game = () => {
  const [num, setNum] = useState([...Array(9).fill(null)]);
  const [cond, setCond] = useState(true)
  console.log(num);

  const checkWinner = () =>{
    
    let winner = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let i=0; i<winner.length; i++){        
       let [a,b,c] = winner[i];
       console.log(i);
       if(num[a] !=null && num[a] === num[b] && num[a] === num[c] ){
        return num[a]
       }  
    }
    return false
  }

  let result = checkWinner();
  console.log(result);
   
   const handleClick = (index) =>{

    if(num[index] != null){
      return;
    }
    let copyArray = [...num];
    copyArray[index]=cond ? "X":"O";
    setNum(copyArray)
    setCond(!cond);

   }

    
  return (
    <div className='container'>
    <h1 className='head'>Tic Tac Toe</h1>
    <h3 className='head'>{cond ? "X":"O"}: Please Move</h3>

    {
      result ? <h1 className='head'>{result} : You Winner</h1> : (
        <> 
        <div className='row' >
      <Square onClick={()=>handleClick(0)} value={num[0]}    />
      <Square onClick={()=>handleClick(1)} value={num[1]}/>
      <Square onClick={()=>handleClick(2)} value={num[2]}/>
       
      </div>
     <div className='row'>
      <Square onClick={()=>handleClick(3)} value={num[3]}/>
      <Square onClick={()=>handleClick(4)} value={num[4]}/>
      <Square onClick={()=>handleClick(5)} value={num[5]}/>
     </div>
     <div className='row'>
      <Square onClick={()=>handleClick(6)} value={num[6]}/>
      <Square onClick={()=>handleClick(7)} value={num[7]}/>
      <Square onClick={()=>handleClick(8)} value={num[8]}/>
     </div> 
     </>
      )
    }
      
     
           
    </div>
  )
}

export default Game;

























// Array.prototype.mySome = function(callback){
//   if(!callback){
//     throw Error("undefined is not a function")
//   }

//   let arr = this;
//   let res;
//   for(let i=0; i<arr.length; i++){
//     let result = callback(arr[i], i, arr)
//     if(result){
//        res = true;
//     } 
//     if(!result){
//        res = false

//     }
//   }
//   return res

// }