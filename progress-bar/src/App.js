import logo from './logo.svg';
import './App.css';
import Progress from './component/Progress';
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(count < 100){
        setCount((counts)=>counts+1)
      }
    },20)

    return ()=>{
      clearInterval(interval)
    }

  },[count])
  return (
     <div>
     <Progress progress={count} color={"red"}/>
     <Progress progress={count} color={"green"}/>
     <Progress progress={count} color={"yellow"}/>
        
     </div>
  );
}

export default App;
