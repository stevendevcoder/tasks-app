import React, { useState } from 'react';
import EditTask from './EditTask';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import TasksDetails from './TasksDetails';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

function TaskElement({
  task,
  updateTask,
  removeTask,
}){
  const {id, name, description, done} = task;
  const [editMode, setEditMode] = useState(false);
  const handleChange = () => {
    updateTask({...task, done: !done});
  };
  const [showTasksDetails, setShowTasksDetails] = useState(false);

  if(editMode) {
    return (
      <EditTask 
        setEditMode={setEditMode} 
        updateTask={updateTask} 
        task={task}
        onClick={()=>console.log("")}
      />
    )
  }

  if(showTasksDetails) return <TasksDetails key={task.id} task={task} setShowTasksDetails={setShowTasksDetails}/>

  return (
    <div onDoubleClick={()=>setShowTasksDetails(true)} 
    key={id} className='task__element' data-aos='fade-right' >
      <div className="information">
        <input 
          type="checkbox" 
          name="done" 
          id="done" 
          checked={done}
          onChange={handleChange}
        />
        <p className={done ? 'checked' : ''}>{name}</p>
      </div>
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