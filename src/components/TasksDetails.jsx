import React from 'react'
import '../styles/TasksDetails.scss'
import { AiOutlineArrowUp } from 'react-icons/ai'

function TasksDetails({task, setShowTasksDetails}) {
  const {id, name, description, done, lastUpdate} = task;

  var hours = lastUpdate.getHours();
  var minutes = lastUpdate.getMinutes();
  var seconds = lastUpdate.getSeconds();

  var sufijo = ' am';
  if(hours > 12) {
    hours = hours - 12;
    sufijo = ' pm';
  }

  if(hours < 10) { hours = '0' + hours; }
  if(minutes < 10) { minutes = '0' + minutes; } 
  if(seconds < 10) { seconds = '0' + seconds; }

  return (
    <div className='task__details'>
      <div className="information">
        <label>Task:</label>
        <p className='name'>{name}</p>

        {description && 
          <>
            <label htmlFor="">Description:</label>
            <p className='description'>
              {description}
            </p>
          </>
        }
      </div>
      <label className=''>
        Last update: {hours}:{minutes}:{seconds}{sufijo}
      </label>
        <AiOutlineArrowUp 
          className='close-details'
          onClick={() => setShowTasksDetails(false)}
        />
    </div>
  )
}

export default TasksDetails