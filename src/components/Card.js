import React from 'react'
import '../styles/Specials.css'
import dishIcon from '../assets/Dish-icon.svg'

const Card = (props) => {
  return (
    <div>
    <div className='card-div'>
        <img src={props.imgSrc} alt={props.alt}/>
        <div className='div-text1'>
          <div className='price-div'>
            <h2 className='card-title dark'>{props.title}</h2>
            <p className='lead-text orange'>{props.price}</p>
          </div>
          <p className='paragraph-text dark p-text'>{props.description}</p>
          <div className='order-div'>
            <p className='specials dark'>Order for delivery</p>
            <img src={dishIcon} alt="order for delivery icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card