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

  const enviar = (e) => {
    //Cerrar el edit/add mode
    e.preventDefault();
    addNewTask(newTask.name, newTask.description)
    setEditMode(false);
  }

  return (
    <form method='get' onSubmit={enviar} className='edit__mode'>
      <input 
        type="text" 
        name='name'
        value={newTask.name}
        onChange={handleChange}
        placeholder='Write the task name right here'
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