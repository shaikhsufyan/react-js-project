 import React, { useEffect, useState } from 'react'
 
 const Crypto = () => {
    const currency = ["USD","EUR","GBP","CNY","JPY"];
    const [selectCurrency,setSelectCurrency] = useState("USD");
    const [inputValue, setInputValue] = useState(1);
    const [cryptoData, setCryptoData] = useState()
    const [arrowUp, setArrowUp] = useState()
    const [cryptoStatus, setCryptoStatus] = useState()

    const handleInput = (e) =>{
        console.log(e.target.value);
        setInputValue(e.target.value)
        
    }
    const handleSelect = (e) =>{
        console.log(e.target.value);
        setSelectCurrency(e.target.value)
        
    }
    const getData = async() =>{
        try{
            const url = `https://api.frontendeval.com/fake/crypto/${selectCurrency}`;
            const response = await fetch(url);
            const data = await response.json()
            const cryptoValue = inputValue *data.value;
            setCryptoData(cryptoValue.toFixed(2))
            
            const previousValue = window.sessionStorage.getItem("preValue")
            const diff = cryptoValue.toFixed(2) - previousValue;
            diff<0 ? setArrowUp(false) : setArrowUp(true);
            setCryptoStatus(diff.toFixed(2))
            window.sessionStorage.setItem("preValue",cryptoValue.toFixed(2))
        }catch(err){
            console.log("ERROR :",err);
            
        }
         
    }

    useEffect(()=>{
        let timer;
        timer = setInterval(()=>{
            getData();
        },3000)

        return ()=>{
            clearInterval(timer)
        }
        
    },[selectCurrency,inputValue])
   return (
     <div className='container'>
        <div className='inputs'>
            <input type='number' onChange={handleInput}/>
            <select onChange={handleSelect}>
                 {currency.map((currency,index)=>{
                    return <option key={index} value={currency}>{currency}</option>
                 })}

            </select>
        </div>
        {/* ↑ ↓ */}
        <div className='datas'>
            <p>{cryptoData}</p>
            <p>WUC</p>
            <p className={arrowUp?"green":"red"}>{arrowUp?"↑":"↓"}{cryptoStatus}</p>
        </div>
     </div>
   )
 }
 
 export default Crypto