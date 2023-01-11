import React from 'react'
import Nav from './Nav'
import Logo from '../assets/LittleLemonLogo.svg'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <Link to="/">
        <img src={Logo} alt="Logo" className='logo'/>
      </Link>
      <Nav />
    </header>
  )
}

export default Header