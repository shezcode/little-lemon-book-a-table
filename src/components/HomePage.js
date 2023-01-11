import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import '../styles/Home.css'

const HomePage = () => {
  return (
    <>
      <Header />
      <Main />
      <div className='footer-home'>
        <Footer />
      </div>

    </>
  )
}

export default HomePage