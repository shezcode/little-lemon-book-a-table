import React from 'react'
import '../styles/Specials.css'
import Salad from '../assets/greek-salad.jpg'
import Lemon from '../assets/lemon-dessert.jpg'
import Bruchetta from '../assets/bruchetta.jpg'

import Card from './Card'

const Specials = () => {
  return (
    <div className='specials-section'>
      <div className='spec-div'>
        <h1 className='section-title'>Specials</h1>
        <button className='spec-btn lead-text'>Online Menu</button>
      </div>
      <div className='cards'>
        <Card
          imgSrc={Salad}
          alt='A greek salad'
          title='Greek Salad'
          price='$10.99'
          description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'/>
        <Card
          imgSrc={Bruchetta}
          alt='Bruschetta'
          title='Bruschetta'
          price='$5.99'
          description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.' />
        <Card
          imgSrc={Lemon}
          alt='A lemon dessert'
          title='Lemon Dessert'
          price='$5.99'
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
      </div>

    </div>

  )
}

export default Specials