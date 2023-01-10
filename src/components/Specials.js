import React from 'react'
import '../styles/Specials.css'
import Salad from '../assets/greek-salad.jpg'
import dishIcon from '../assets/Dish-icon.svg'

const Specials = () => {
  return (
    <div className='specials-section'>
      <div className='spec-div'>
        <h1 className='section-title'>Specials</h1>
        <button className='spec-btn lead-text'>Online Menu</button>
      </div>
      <div className='card-div'>
        <img src={Salad} alt="A greek salad" width={200} height={250}/>
        <div className='price-div'>
          <h2 className='card-title dark'>Greek Salad</h2>
          <p className='lead-text orange'>$10.99</p>
        </div>
        <p className='paragraph-text dark'>A greek salad with feta cheese, olives, and tomatoes</p>
        <div className='order-div'>
          <p className='paragraph-text dark'>Order for delivery</p>
          <img src={dishIcon} alt="order for delivery icon" />
        </div>
      </div>
    </div>

  )
}

export default Specials