import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { useState } from 'react'


function App () { 

  const handleClose = () => window.alert('Emulamos que se cierra la card'); 
  
  const [characters,setCharacters] = useState([])

   const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            const newCharacter = {
            id:data.id,  
            name: data.name,
            species: data.species,
            gender: data.gender,
            image:data.image}
            setCharacters((oldChars) => [...oldChars, newCharacter]);
            console.log(characters) 
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  return (
    <div className='App' >
      <NavBar onSearch = {onSearch} />
      <hr />
      <Cards characters={characters} onClose={handleClose}/>
      <hr />
      
    </div>
  )
}

export default App
