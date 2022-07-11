import React from 'react'
function TasksList({children}) {
  return (
    <div className="tasks__list">
      {children}
    </div>
  )
}

export default TasksList