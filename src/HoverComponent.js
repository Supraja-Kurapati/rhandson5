import React from 'react'
import HigherOrder from './HigherOrder'

const HoverComponent = ({count,increment}) => {

  return (
    <div><h1>{count}</h1>
    <button onMouseOver={increment} id='button'>Hover</button>
    </div>
  )
}

export default HigherOrder( HoverComponent )