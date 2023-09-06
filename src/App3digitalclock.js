import React, { useState } from 'react'

const App3digitalclock = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time)






  return (
    <div>App3digitalclock</div>
  )
}

export default App3digitalclock