import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to=""><img src="../imagenes/icons8-rick-sanchez-100.png" alt="" /><img src="" alt="" /></Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            {/* <li><Link to="/about">About</Link></li>
            <li><Link to="/">Home</Link></li> */}
        </ul>
    </nav>
  )
}

export default Nav