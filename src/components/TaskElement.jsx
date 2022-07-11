import React, { useState } from 'react';

function TaskElement({id, name, description, done, updateTask}){
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
    </div>
  )
}

export default TaskElement;