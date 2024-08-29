import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
// import Data from './Data';
 
const Data = React.lazy(()=>import("./Data"))

function App() {
  return (
    <div>
       <h1>Lazy Loading</h1>
       <Suspense fallback="Please Wait Data Loading...">
       <Data/>
       </Suspense>
       
    </div>
  ); 
}

export default App;
