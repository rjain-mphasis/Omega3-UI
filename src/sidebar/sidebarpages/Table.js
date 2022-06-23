import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <div>
        <h2>Table</h2>
        <table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email Address</th>
  </tr>
  <tr>
   <td>Hillary</td>
   <td>Nyakundi</td>
   <td>tables@mail.com</td>
  </tr>
  <tr>
    <td>Lary</td>
    <td>Mak</td>
    <td>developer@mail.com</td>
  </tr>
</table>

      </div>
    )
  }
}