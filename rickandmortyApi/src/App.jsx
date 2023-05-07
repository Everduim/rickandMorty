import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './paginas/Home'
import Gallery from './paginas/Gallery'
import Nav from './core/nav'
import Footer from './core/footer'
import CharacterInfo from './paginas/CharacterInfo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Nav></Nav>
   <Routes>
   
    <Route path='/' element={<Home/>}></Route>
    <Route path='/gallery' element={<Gallery/>}></Route>


    <Route path='/gallery/:id' element={<CharacterInfo/>}></Route>



  
   </Routes>
   <Footer></Footer>
    </>
  )
}

export default App
