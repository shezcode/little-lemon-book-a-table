import React from 'react'
import matt from '../assets/matt.jpg'
import jessica from '../assets/jessica.jpg'
import john from '../assets/john.jpg'
import '../styles/Testimonials.css'
import ReviewCard from './ReviewCard'

const Testimonials = () => {
  return (
    <div className='t-container'>
      <h1 className='section-title '>Testimonials</h1>
      <div className='rev-cards'>
        <ReviewCard
          name='Matt'
          avatar={matt}
          text='Great food, great service, great atmosphere. I love this place!'
          rating='4.8/5'/>
        <ReviewCard
          name='Jessica'
          avatar={jessica}
          text='I love the food here. The service is great and the staff is very friendly.'
          rating='4/5'/>
        <ReviewCard
          name='John'
          avatar={john}
          text='Not a big fan of italian food, but this place is amazing. I love the food here.'
          rating='4.5/5'/>
    </div>
      </div>

  )
}

export default Testimonials