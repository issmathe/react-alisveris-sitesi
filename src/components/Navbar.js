import React from 'react'
import Logo from '../assets/hamburgerlogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo}/>
        </div>
        <div className='rightSide'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkında</Link>
          <Link to="/contact">İletişim</Link>
          
        </div>
    </div>
  )
}

export default Navbar