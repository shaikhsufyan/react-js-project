import React, { useState } from 'react'
import { ScaleLoader,FadeLoader,DotLoader, BarLoader} from 'react-spinners'

const App = () => {
  const [load, setLoad] = useState(true)
  const [data, setData] = useState("")

  setTimeout(()=>{
    setLoad(false)
    setData("Data Loading Completed !")
  }, 4000)
  return (
    <div style={{margin:125}}>
      <ScaleLoader loading={load} cssOverride={{marginTop:22}} />
      <FadeLoader loading={load} cssOverride={{marginTop:22}}/>
      <BarLoader loading={load} cssOverride={{marginTop:22}}/>
      <DotLoader loading={load} cssOverride={{marginTop:22}}/>
      <h1>{data}</h1>

    </div>
  )
}

export default App