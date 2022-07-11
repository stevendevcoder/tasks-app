import React, {useState} from 'react';
import { BsSearch } from 'react-icons/bs';

function Search({term, setTerm, filterTasks}) {

  const handleChange = e => {
    setTerm(e.target.value);
    filterTasks()
  }

  return (
    <div className='search'>
      <input 
        type="text" 
        placeholder='Busca una tarea' 
        value={term}
        onChange={handleChange}
      />
      <BsSearch className='btn-search'/>
    </div>
  )
}

export default Search