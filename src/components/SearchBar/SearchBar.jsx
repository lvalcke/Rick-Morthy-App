import { useState } from 'react'

function SearchBar(props) {
   const [ CharId , setCharId ] = useState('')
   
   const handleState = (event) => {
      setCharId(event.target.value)
   }
   return (
      <div>
         <input type = 'search' onChange = {handleState} value = {CharId}/>
         <button onClick={() => props.onSearch(CharId)}>Agregar</button>
      </div>
   );
}

export default SearchBar;
