import React, { useState } from 'react'
import Search from './components/Search';
import TasksList from './components/TasksList';
import TaskElement from './components/TaskElement';
import AddTasks from './components/AddTasks';
import { Vanta } from './components/Vanta';
import { GrAdd } from 'react-icons/gr'
import { getTasksLS, updateTasksLS } from './LocalStorage/LocalStorage';

import './styles/App.scss';

function App() {
  /* Estados */
  const [tasks, setTasks] = useState(getTasksLS());
  const [filteredTasks, setFilteredTasks] = useState(tasks); 
  const [term, setTerm] = useState('');
  const [editMode ,setEditMode] = useState(false);

  /* Funciones */ 
  const filterTasks = () => {
    const filtered = tasks.filter(task => 
      task.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  const addNewTask = (name, description) => {
    const newTask = {
      id: tasks.length > 0 ? tasks.length + 1 : 1,
      name: name, 
      description: description,
      done: false
    };
    const newArray = [...tasks, newTask];
    setTasks(newArray);
    updateTasksLS(newArray);
  }

  const updateTask = (id, property, value) => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        return {
          ...task,
          done: value
        }
      }
      return task
    })
    setTasks(updatedTasks);
    updateTasksLS(updatedTasks);
  };

  const removeTask = (id) => {
    const filtered = tasks.filter(task => task.id !== id);
    setTasks(filtered);
    updateTasksLS(filtered);
  }

  return (
    <div ref={Vanta()} className="App">
      <h1>TasksApp</h1>
      <div className="tasks__container">
        <div className='options__container'>
          <div onClick={()=>setEditMode(true)} className='add__tasks'>
            <p>Añadir tarea</p>
            <GrAdd className='btn-add'></GrAdd>
          </div>
          <Search 
            term={term}
            setTerm={setTerm}
            filterTasks={filterTasks}
          />
        </div>

        {editMode && 
          <AddTasks 
            setEditMode={setEditMode} 
            addNewTask={addNewTask} 
          />
        }

        <TasksList>
          {term.length > 0 ? 
            filteredTasks.map(task => 
              <TaskElement 
                key={task.id} 
                updateTask={updateTask}
                removeTask={removeTask}
                {...task}
              />
            ) :
            tasks.map(task => 
              <TaskElement 
                key={task.id} 
                updateTask={updateTask}
                removeTask={removeTask}
                {...task}
              />
            )  
          }
        </TasksList>
      </div>
    </div>
  );
}

export default App;
