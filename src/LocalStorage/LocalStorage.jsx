export const getTasksLS = () => {
  const itemJSON = localStorage.getItem('tasks');
  return itemJSON ? JSON.parse(itemJSON) : [] 
}

export const updateTasksLS = (updated) => {
  const updatedTasks = JSON.stringify(updated);
  localStorage.setItem('tasks', updatedTasks);
}

//export default {getTasksLS, updateTasks};