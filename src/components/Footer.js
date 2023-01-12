import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='foot'>
      <div className='col1'>
        <h3 className='section-title primary-yellow'>Little Lemon</h3>
        <ul className='lil'>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/">Order Online</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
      <div className='col2'>
        <h3 className='section-title primary-yellow'>Contact</h3>
        <ul className='lil'>
          <li><a href="/">Phone</a></li>
          <li><a href="/">Email</a></li>
          <li><a href="/">Address</a></li>
        </ul>
      </div>
      <div className='col3'>
        <h3 className='section-title primary-yellow'>Follow Us</h3>
        <ul className='lil'>
          <li><a href="/">Facebook</a></li>
          <li><a href="/">Twitter</a></li>
          <li><a href="/">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer