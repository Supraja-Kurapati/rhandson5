import React, { PureComponent } from 'react'

export class Pure extends PureComponent {
constructor(props) {
  super(props)

  this.state = {
    count:0
  }
}

  render() {
    console.log("PureComponent is called.")
    return (
      <div>
        <h2>Pure Component</h2>
        <h1>{this.state.count}</h1>

        <button onClick={()=>this.setState({count:this.state.count})} id='button'>CLick</button>
      </div>
    )
  }
}

export default Pure