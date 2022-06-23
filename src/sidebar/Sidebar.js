import React, { Component } from 'react'
import {SideBarMock} from './SideBarMock'
import { NavLink } from 'react-router-dom'

export default class sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
         <h2>Mphasis</h2>
         <br/>
          <ul>
              {   SideBarMock.map((item,i)=>{
                    return(
                      <li key={i}>
                      <NavLink className='link' to={item.path}>{item.name}</NavLink>
                    </li>
                    )})}
              </ul>
    </div>
    )
  }
}
