import React, { useState } from 'react'

const Main = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState()

    const myFun = async () =>{
        try{
        const get = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        const jsonData = await get.json()
        console.log(jsonData[0].sourceUrls[0]);
        setData(jsonData)
        }catch(err){
            alert(err)
        }
         
    }
    
    const handleInput = (event) =>{
        setSearch(event.target.value)
    }

  return (

   <div className='app'>
   <h1>Dictionary APP</h1>
      <div className='container'>
      <div className='searchBar'>
      <input type='text' placeholder='Search Word' onChange={handleInput}/>
      <button onClick={myFun}>Search</button>
    </div>
    <div className='datas'>
    {data ? 
        <div className='datas' >
        <h2>Word : {data[0].word}</h2>
        <p>{data[0].meanings[0].partOfSpeech}</p>
        <p>Defination : {data[0].meanings[0].definitions[0].definition} </p>
        <p>synonyms : {data[0].meanings[0].synonyms}</p>
        <p>Example : {data[0].meanings[0].definitions[0].example}</p>
        <a href={data[0].sourceUrls[0]}>Read More</a>
        </div>
       
        :"" }
     
    </div>
      </div>
   </div>
  )
}

export default Main