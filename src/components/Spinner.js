import React, { Component } from 'react'
import spinner from './spinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{width: '6rem'}}  src={spinner} alt="loading" />
      </div>
    )
  }
}

export default Spinner