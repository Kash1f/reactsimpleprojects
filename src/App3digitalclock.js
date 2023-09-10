import React, { useState } from 'react'
import './App.css'

const App3digitalclock = () => {

  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  let UpdateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCtime(time);
}

  setInterval(UpdateTime, 2000);

return (
    <>
    <h1>{ctime}</h1>
    </>
)
}

export default App3digitalclock