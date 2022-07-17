import React, { useState } from 'react';
import EditTask from './EditTask';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

function TaskElement({
  task,
  updateTask,
  removeTask
}){
  const {id, name, description, done} = task;
  const [editMode, setEditMode] = useState(false);
  const handleChange = () => {
    updateTask({...task, done: !done});
  }

  if(editMode) {
    return (
      <EditTask 
        setEditMode={setEditMode} 
        updateTask={updateTask} 
        task={task}
      />
    )
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
          onClick={()=>setEditMode(true)}
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