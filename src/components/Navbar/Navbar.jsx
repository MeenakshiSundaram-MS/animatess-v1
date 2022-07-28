import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
        <span className='nav__leftSpan'>
            <span className='nav_heading'>Animatess</span>
        </span>
        <span className='nav__rightSpan'>
            <span className='nav_button'>Support!</span>
            <span className='nav_button'>Github</span>
        </span>
    </div>
  )
}

export default Navbar