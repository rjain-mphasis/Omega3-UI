import React, { Component } from 'react'
 import {FaRegCopyright} from 'react-icons/fa'
import {Mock} from './Mock'
export default class Footer extends Component {
  render() {
    const footer = Mock.map((data) => { return data.footer })
    console.log(footer)
    return (
      <>
    { 
     footer[0].map((data)=>{
      return(
        <div className={data.className}>
         
          <p><FaRegCopyright/>{data.text}</p>
          </div>
      )
})}

         {/* <div className='footer'>
          <p><FaRegCopyright/>2022 Copyrights have been reserved for this page</p>
          </div> */}
          </>
    )
  }
}
