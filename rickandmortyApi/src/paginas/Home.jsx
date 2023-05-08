import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div class="home">
      <Link to="./gallery">
      <img src="https://www.cnet.com/a/img/resize/e29930a82851e59ebd18db941405fb7aee1be88d/hub/2022/10/13/af1a03cc-6e02-4524-9460-a12430c5fd93/fece6f45-3441-0d94-30d5-5bd4e48382bf.jpg?auto=webp&fit=crop&height=675&width=1200" alt="imagen-inicio" />
      </Link>
    </div>
  )
}

export default Home