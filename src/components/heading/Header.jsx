import React from 'react'
import Head from './Head'
import './header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Header = () => {
    const [click, setClick]= useState(false)
  return (
      <>
          <Head />
          <header>
              <nav className='flexSB'>
                  <ul className= {click ? "mobile-nav" : "flexSB"} onClick = {()=> setClick(false)}>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/academics">Academics</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/students">Student Life</Link></li>
                      <li><Link to="/resources">Resources</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                  </ul>
                  <div className="start">
                      <div className="button">Learn More</div>
                  </div>

                  {/* ___button that toggles between displaying an "X" icon and a "bars" icon when clicked___event listener sets the value of the click variable to its opposite boolean value */}
                  <button className='toggle' onClick={() => setClick(!click)}>
                      {click ? <i className='fa-solid fa-xmark'></i> : <i className='fa-solid fa-bars'></i>}
                  </button>
                  
              </nav>
          </header>
          
    </>
  )
}



export default Header