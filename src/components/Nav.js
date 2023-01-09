import React from 'react'
import '../styles/nav.css'

const Nav = () => {
  return (
    <nav>
      <ul className='navbar card-title'>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav