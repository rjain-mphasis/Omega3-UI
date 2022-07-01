import React, { Component } from 'react'
import Buttons from './Button'
export default class Cards extends Component {
  render() {
    
    return (
      <div >
        <div className='container'>
              <div className='size'>
                  <div className='num'>{this.props.size}</div>
              </div>
              <div className='cardtittle'>
                  <h3>{this.props.title}</h3>
                  <p>lorem3o Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                  <Buttons data={this.props.btn} />
              </div>
        </div>
      </div>
    )
  }
}
