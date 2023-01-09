import React from 'react'
import Nav from './Nav'
import Logo from '../assets/LittleLemonLogo.svg'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <Nav />
    </header>
  )
}

export default Header