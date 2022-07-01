import React, { Component } from 'react'
export default class Buttons extends Component {
  
  render() {
   
    return (
       
              <div className='button' >
                <button style={{backgroundColor:'green'}} >{this.props.data}</button>
              </div>
    )
  }
}
