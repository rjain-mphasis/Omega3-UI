import React, { Component } from 'react'
import Alert from '../sidebar/sidebarpages/Alert'
import Button from '../sidebar/sidebarpages/Buttons'
import Cards from '../sidebar/sidebarpages/Cards'
import Heading from '../sidebar/sidebarpages/Heading'
import CloseButton from '../sidebar/sidebarpages/CloseButton'
import Dropdowns from '../sidebar/sidebarpages/Dropdowns'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Investors from './Investors'
import Home from './Home'
import Services from './Services'
import Introduction from './Introduction'
import Contacts from './Contacts'


export default class MainPage extends Component {
  render() {
    return (
      <div className='mainpage'>
        <Navbar/>
        <Routes>
        <Route path='/alert' element={<Alert/>}/>
        <Route path='/buttons' element={<Button/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/heading' element={<Heading/>}/>
        <Route path='/closebutton' element={<CloseButton/>}/>
        <Route path='/dropdowns' element={<Dropdowns/>}/>
        <Route path='/investors' element={<Investors/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/introduction' element={<Introduction/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>   
      </div>
    )
  }
}
