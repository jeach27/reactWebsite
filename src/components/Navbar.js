import React from 'react'
import logo from '../assets/logoPizza.webp'

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
