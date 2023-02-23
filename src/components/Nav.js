import './Nav.css'

import Logo from '../assets/images/logo.svg'
import MenuBtn from '../assets/images/icon-menu.svg'
import CloseBtn from '../assets/images/icon-menu-close.svg'

import { useRef } from 'react'

import Menu from './Menu'
import React from 'react'

const Nav = ({bodyRef}) => {

  const menuItems = [
    "Home", "New", "Popular", "Trending", "Categories"
  ]

  const navRef = useRef()
  const menuRef = useRef()
  

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
    menuRef.current.classList.toggle('hide')
    bodyRef.current.classList.toggle('filter')

  }

  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul ref={navRef}>
        {menuItems.map((item) => (
          <Menu
            item={item}
            key={item} />
        ))}
        <div className="close">
          <button onClick={showNavbar}>
            <img src={CloseBtn} alt="close" />
          </button>
        </div>
      </ul>
      <div ref={menuRef} className="hamburger">
        <button onClick={showNavbar}>
          <img src={MenuBtn} alt="menu" />
        </button>

      </div>
    </nav>
  )
}

export default Nav
