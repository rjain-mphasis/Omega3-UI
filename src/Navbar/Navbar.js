import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { mock } from './Mock';

export default class Navbar extends Component {

  render() {
    return (
      <div className='navmock'>

         <ul>
              {
                 mock.map((item,i)=>{
                    return(
                        <li key={i}>
                        <NavLink className='link' to={item.path}>{item.name}</NavLink>
                      </li>
                    )
                  })
              }
              

          </ul>
      </div>
    )
  }
}
