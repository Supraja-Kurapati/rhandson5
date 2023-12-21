import React from 'react'
import HigherOrder from './HigherOrder'
const ClickCounter = ({count,increment}) => {
   

  return (
    <div>
      <h2>Higher Order Component</h2>
        <h1>{count}</h1>
        <button onClick={increment} id='button'>Click</button>
        
    </div>
  )
}

export default HigherOrder( ClickCounter)