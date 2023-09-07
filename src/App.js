import React, { useState } from 'react'
import './App.css'

const App = () => {

  const purple = "#8e44ad";

  const [bg, setBg] = useState(purple);

  const bgChange = () => {
  // console.log('clicked');
  let newBg = '#34495e'
  setBg(newBg);


  
};
  return (
    <>
    <div style={{backgroundColor: bg}}>
       <button onClick={bgChange}>Click Me</button>
    </div>
    </>
  )
}

export default App