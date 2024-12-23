 import React, { useEffect, useState } from 'react'
 
 const CryptoTracking = () => {
    const [cryptoData, setCryptoData] = useState([])
    const [search, setSearch] = useState("")

    const cryptoCurrency = async() =>{
        try{
            const response = await fetch("https://openapiv1.coinstats.app/coins?currency=INR",{
                headers:{'API-X-KEY':"gIwdnYpRXiS0HYHsAy8209oVNy6cSZym+sv6hTlRudk="}
            })
            const data = await response.json();
            console.log(data);
            setCryptoData(data.result)
            

        }catch(err){
            console.log(err);
            
        }
        
    }

    const handleInput = (e) =>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
        cryptoCurrency()
    },[])
   
   return (
     <div className='container'>
        <div>
            <h1>CryptoCurrency Price Tracking</h1>
            <input type='text' placeholder='Search Here ..' onChange={handleInput}/>
        </div>

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Market Cap</th>
                        <th>Price</th>
                        <th>Available Supply</th>
                        <th>Volume (24hr)</th>

                    </tr>
                </thead>
                <tbody>
                     {cryptoData.filter((value)=>{
                        console.log(value)
                        return value.name.toLowerCase().includes(search.toLowerCase())
                     }).map((value,ind)=>{

                        return <tr>
                         <td>{value.rank}</td>
                         <div className='icons'>
                         <img src={value.icon}/>
                         <td>{value.name}</td>
                         </div>
                         <td>{value.symbol}</td>
                         <td>{value.marketCap.toFixed(2)}</td>
                         <td>{value.price.toFixed(2)}</td>
                         <td>{value.availableSupply}</td>
                         <td>{value.volume.toFixed(2)}</td>

                       </tr>
                     })
                     }
                </tbody>
            </table>
        </div>
     </div>
   )
 }
 
 export default CryptoTracking