import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div style={{height:"100vh", paddingTop:"20vh" }} className='text-center' >
        <img src={loading} alt="Loading" />
      </div>
    )
  }
}


