import React, { useState } from 'react'
import '../styles/EditMode.scss';
import { AiFillEdit } from 'react-icons/ai'

function EditTask({setEditMode, updateTask, task}) {
  const [editTask, setEditTask] = useState(task);

  const handleChange = (e) => {
    setEditTask({...editTask, [e.target.name]: e.target.value})
  }

  const handleKeyEnter = (e) => {
    if(e.key === 'Enter'){
      enviar();
    }
  } 

  const enviar = (e) => {
    e && e.preventDefault();
    setEditTask({...editTask, lastUpdate: new Date()})

    if(editTask.name.length > 0){
      updateTask(editTask);
      setEditMode(false);
    }
  }

  return (
    <form onSubmit={enviar} className='edit__mode' data-aos="fade-in" onKeyPress={handleKeyEnter}>
      <input 
        type="text" 
        value={editTask.name}
        name="name"
        onChange={handleChange}  
        placeholder='nombre de la tarea...'
        autoFocus
      />
      <input 
        type="text" 
        value={editTask.description}
        name="description"
        onChange={handleChange}
        placeholder='descripcion...'
      />
      <div className="options">
        <button 
          type="submit"
          className='btn-edit'
          onClick={enviar}
        >
          <AiFillEdit/>
          Editar
        </button>
      </div>
    </form>
  )
}

export default EditTask