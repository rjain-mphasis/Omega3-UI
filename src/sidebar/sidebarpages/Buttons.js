import React, { Component } from 'react'

export default class Buttons extends Component {
 
  render() {
    const color=['red','yellow','pink']
    return (
      <div className='center'>
        {
          color.map((item,i)=>{
            return(
              <div className='button'>
                <button style={{backgroundColor:item}}>button{i+1}</button>
                <hr/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
