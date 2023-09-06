import React, { useState } from 'react'

const App3digitalclock = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  




  return (
   <>
    <h1>{ctime}</h1>
    <button onClick={}></button>
   
   
   
   </>
  )
}

export default App3digitalclock