import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='foot'>
      <div className='col1'>
        <h3 className='section-title primary-yellow'>Little Lemon</h3>
        <ul className='lil'>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div className='col2'>
        <h3 className='section-title primary-yellow'>Contact</h3>
        <ul className='lil'>
          <li><a href="/phone">Phone</a></li>
          <li><a href="/email">Email</a></li>
          <li><a href="/address">Address</a></li>
        </ul>
      </div>
      <div className='col3'>
        <h3 className='section-title primary-yellow'>Follow Us</h3>
        <ul className='lil'>
          <li><a href="/facebook">Facebook</a></li>
          <li><a href="/twitter">Twitter</a></li>
          <li><a href="/instagram">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer