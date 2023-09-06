import React, { useState } from 'react'
import './App.css'

const AppuseState = () => {

    const [count, setCount] = useState(0);

    let IncNum = () => {
        setCount(count+1);
    }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Count</button>
    
    </>
  )
}

export default AppuseState