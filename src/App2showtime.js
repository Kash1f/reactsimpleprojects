import React, { useState } from 'react'
import './App.css'

const App2showtime = () => {

    const newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
}

return (
  <>
  <h1>{ctime}</h1>
  <button onClick={UpdateTime}>Get Time</button>
  </>
)
}

export default App2showtime;