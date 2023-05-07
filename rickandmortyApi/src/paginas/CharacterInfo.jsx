import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import './CharacterInfo.scss'

const CharacterInfo = () => {
    const {id} = useParams()
    // console.log(id);
    const [character,setCharacter] = useState({})

    useEffect(() => {
        const getCharacterId = async () => {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            // console.log(res.data);
            setCharacter(res.data)
        }
        getCharacterId()
    },[id])
  return (
    <div className="carta">
    {character ? (
        
        <div >
        
        <h3 >{character.name}</h3>
        <div className="carta-dentro">
        
                <img className="carta-imagen" src={character.image} alt={character.name}/>
                
                </div>
                <p>{character.gender}</p>
                <p>{character.status}</p>

        </div>
    ) : null}
</div>
  )
}

export default CharacterInfo

