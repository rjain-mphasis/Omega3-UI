import './App.css';
import Cards from './commonComponent/Cards'
import NavBar from './commonComponent/Nav'
import Footer from './commonComponent/Footer';

 import React, { Component } from 'react'
import Alert from './commonComponent/Alert';
import Modal from './commonComponent/Modal';
 
 export default class App extends Component {
   render() {
     return (
      <div>
        <div>
          <NavBar/>
          <Alert />
        </div>

         <div className='center'>
        <Cards size='220x440'
        title='Shahbaz'
        btn='GO'/>
         <Cards size='200x400'
        title='Anurag'
        btn='GO Down'/>
         <Cards size='100x200'
        title='Ketan'
        btn='GO Up'/>
       </div>
       <Modal/>
       <div>
        <Footer/>
       </div>
      </div>
     )
   }
 }
 