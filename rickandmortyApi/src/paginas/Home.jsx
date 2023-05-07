import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div class="home">
      <Link to="./gallery">
      <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/04/16622972797068.jpg" alt="imagen-inicio" />
      </Link>
    </div>
  )
}

export default Home