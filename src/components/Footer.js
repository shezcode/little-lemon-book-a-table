import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Doormat</h3>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li><a href="/phone">Phone</a></li>
          <li><a href="/email">Email</a></li>
          <li><a href="/address">Address</a></li>
        </ul>
      </div>
      <div>
        <h3>Follow Us</h3>
        <ul>
          <li><a href="/facebook">Facebook</a></li>
          <li><a href="/twitter">Twitter</a></li>
          <li><a href="/instagram">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer