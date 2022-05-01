import React from 'react'
import './header.css'
import bild from '../../assets/images/profilbild.jpg'

const Header = () => {
  return (
    <header className="header">
    <div className="image-container">
      <img className="image" src={bild} alt="Carin Wood"/>
    </div>

  <div className="name-div">
  <h1 className='name'>Carin Wood</h1>
  <h2 className='job-title'>FULLSTACKUTVECKLARE</h2>
  </div>
  </header>
  )
}

export default Header