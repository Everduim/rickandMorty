import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Gallery.scss'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const [characters,setCharacters] =useState([])
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(()=>{
    async function getCharacters  () {
      // const res =await axios.get("https://rickandmortyapi.com/api/character")
      const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
      // console.log(res.data.results)
      setCharacters(res.data.results)
    }
    getCharacters()
  },[page])
//
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredCharacters = characters.filter((character) => {
  return character.name.toLowerCase().includes(searchTerm.toLowerCase());
});


//
  return (
    
    <div className='home' >
      
      {/* <h2 className="titulo">Gallery</h2> */}
      
      <img className='logo' src="../imagenes/Captura de Pantalla 2023-05-06 a las 23.43.31.png" alt="" />
      

      <div className='search'>
        <label htmlFor='search'>Search:</label>
        <input className='input' type='text' id='search' value={searchTerm} onChange={handleSearch} />
      </div>
     
      
      
      
      
      <div className="gallery">
      {/* {characters.map((character)=> ( */}
        {filteredCharacters.map((character) => (
        <figure key={character.id} >
          <h3 className='name'>{character.name}</h3>
          <Link key={character.id} to={`${character.id}`}>
            <img src={character.image} alt={character.name} /></Link>          
        </figure>
      ))}
      </div>
      {/* <button onClick={() => setPage(page + 1)}>Siguiente página</button> */}
      <div className="botones"> 
      <button className="boton" onClick={() => setPage(page ? page -1  : -1)}>⏮️</button>
      <button className="boton" onClick={() => setPage(page ? page + 1 : 2)}> ⏭️  </button>
      </div> 
    </div>
  )
}

export default Gallery