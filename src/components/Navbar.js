/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../assets/logoP.jpg'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'></div>
        <img src={logo} />
      <div className='rightSide'></div>
    </div>
  )
}

export default Navbar
