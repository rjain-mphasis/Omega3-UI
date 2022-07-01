import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div>
        <div className='modal'>
            <div className='firstrow'>
                <span><h2>Modal Tittle</h2></span>
                <span className='close'>X</span>
            </div>
            <div className='secondrow'>
              <p>Modal body text goes here.</p>
            </div>
            <div className='thirdrow'>
              <button>close</button>
              <button>Save Changes</button>
            </div>
        </div>
      </div>
    )
  }
}
