import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    return (
      <div className='page'>
        <h2>Pagination with Borders</h2>

<div class="pagination">
  <input type='button' href="#"/>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
      </div>
    )
  }
}