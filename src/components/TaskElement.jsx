import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

function TaskElement({
  id,
  name, 
  description, 
  done,
  updateTask,
  removeTask
}){
  const handleChange = () => {
    updateTask(id, 'done', !done);
  }

  return (
    <div key={id} className='task__element'>
      <input 
        type="checkbox" 
        name="done" 
        id="done" 
        checked={done}
        onChange={handleChange}
      />
      <p className={done ? 'checked' : ''}>{name}</p>
      <div className='options'>
        <AiFillEdit 
          //onClick={}
          className='btn-edit'
        />
        <AiFillDelete 
          onClick={()=>removeTask(id)} 
          className='btn-delete' 
        />
      </div>      
    </div>
  )
}

export default TaskElement;