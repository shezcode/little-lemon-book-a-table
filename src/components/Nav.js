import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'


const Nav = () => {
  return (
    <nav>
      <ul className='navbar card-title'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to='/reservations'>Reservations</Link></li>
        <li><Link to="/">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav