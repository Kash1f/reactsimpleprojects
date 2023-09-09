import React, { useState } from 'react'
import './App.css'

const App = () => {

  const purple = "#8e44ad";

  const [bg, setBg] = useState(purple);
  const [name, setName] = useState('click me');

  const bgChange = () => {
  // console.log('clicked');

  let newBg = '#34495e'
  setBg(newBg);  //setBg will have newBg variable inside it which makes the curret value of bg=newBg as it is inside the function of setBg which updates the function according to hooks

  setName('Changed');
};

  const bgBack = () => {
    setBg('orange');
    setName('Back');
};
  

return (
    <>
    <div style={{backgroundColor: bg}}>
       <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
    </div>
    </>
)
}

export default App