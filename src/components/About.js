import React from 'react'
import mario from '../assets/mario.jpg'
import adrian from '../assets/adrian.jpg'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='subtitle'>About Us</h1>
      <h2 className='section-title primary-green'>Little Lemon</h2>
      <div className='desc-pics'>
        <p className='lead-text about-text'> We are Adrian and Mario, the founders of the Little Lemon. We started this journey back in 2005 when we saw the opportunity to start a great restaurant in downtown Chicago. Ever since, we have prepared thousands of delicious meals for clients from all over the world. We are so grateful for it!</p>
        <img src={adrian} alt="" className='about-img'/>
      </div>

    </div>
  )
}

export default About