import React, { useContext, useState } from 'react'
import Navbar from './Components Navbar/Navbar'
import './App.css'
import Intro from './Components Navbar/Intro/Intro'
import Services from './Components Navbar/Services/Services'
import Experiences from './Components Navbar/Experiences/Experiences'
import Works from './Components Navbar/Works/Works'
import Portfolio from './Components Navbar/Portfolio/Portfolio'
import Testimonial from './Components Navbar/Testimonial/Testimonial'
import Contact from './Components Navbar/Contact/Contact'
import Footer from './Components Navbar/Footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experiences></Experiences>
      <Works></Works>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App