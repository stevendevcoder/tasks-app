import React, { useState } from 'react'
import '../styles/EditMode.scss';

function AddTasks({setEditMode, addNewTask}) {
  const [newTask, setNewTask] = useState({
    name: '',
    description: ''
  })

  const handleChange = (e) => {
    setNewTask({...newTask, [e.target.name]: e.target.value})
  }

  const handleKeyEnter = (e) => {
    if(e.key === 'Enter'){
      enviar();
    }
  } 

  const enviar = (e) => {
    //Cerrar el edit/add mode
    e && e.preventDefault();
    if(newTask.name.length > 0) {
      addNewTask(newTask.name, newTask.description)
      setEditMode(false);
    }
  }

  return ( 
    <form onSubmit={enviar} className='edit__mode' onKeyPress={handleKeyEnter}>
      <input 
        type="text" 
        name='name'
        value={newTask.name}
        onChange={handleChange}
        placeholder='Write the task name right here'
        required
        autoFocus
        />
      <input 
        type="text" 
        name='description'
        value={newTask.description}
        onChange={handleChange}
        placeholder='Description...'
      />
      <div className='options'>
        <button className="btn-cancel" onClick={()=>setEditMode(false)}>
          Cancelar
        </button>
        <button className="btn-add" type="submit" onClick={enviar} >
          Agregar
        </button>
      </div>
    </form>
  )
}

export default AddTasks