import React from 'react'
import food from '../assets/restauranfood.jpg'
import '../styles/Hero.css'

const Hero = () => {

  const navToReservations = () => {
    window.location.href = '/reservations'
  }

  return (
    <div>
      <div className='green-container'>
        <div className='div-text'>
          <h1 className='title primary-yellow'>Little Lemon</h1>
          <h2 className='subtitle white'>Chicago</h2>
          <p className='paragraph-text wide'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className='btn paragraph-text' onClick={navToReservations}>Reserve a table</button>
        </div>
        <div>
          <img src={food} alt="A serving of our delicious food" className='img-1'/>
        </div>

      </div>
    </div>

  )
}

export default Hero