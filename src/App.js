import React, { useState } from 'react'
import Search from './components/Search';
import TasksList from './components/TasksList';
import TaskElement from './components/TaskElement';
import AddTasks from './components/AddTasks';
import { Vanta } from './components/Vanta';
import { GrAdd } from 'react-icons/gr'
import { getTasksLS, updateTasksLS } from './LocalStorage/LocalStorage';

import './styles/App.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  duration: 700
});

function App() {
  /* Estados */
  const [tasks, setTasks] = useState(getTasksLS());
  const [filteredTasks, setFilteredTasks] = useState(tasks); 
  const [term, setTerm] = useState('');
  var doneTasks = tasks.filter(task => task.done).length;
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
      id: tasks.length,
      name: name, 
      description: description,
      done: false,
      lastUpdate: new Date()
    };
    const newArray = [...tasks, newTask];
    setTasks(newArray);
    updateTasksLS(newArray);
  }

  const updateTask = (newTask) => {
    const updatedTasks = tasks.map(task => 
      (task.id === newTask.id) ? newTask : task
    )
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
      <h1 data-aos="fade-in">Tasks App</h1>
      
      <div className="tasks__container">
        <div className='options__container' data-aos="flip-left">
          <div onClick={()=>setEditMode(true)} className='add__tasks'>
            <p>Añadir tarea</p>
            <GrAdd className='btn-add'></GrAdd>
          </div>
          <Search 
            term={term}
            setTerm={setTerm}
            filterTasks={filterTasks}
            data-aos="fade-in"
          />
        </div>

        {editMode && 
          <AddTasks 
            setEditMode={setEditMode} 
            addNewTask={addNewTask}
            data-aos="fade-in" 
          />
        }

        {tasks.length === 0 ? 
          <h3>Añedeme tareas :)</h3> 
          :
          <TasksList data-aos="fade-in">
            {term.length > 0 ? 
              filteredTasks.map(task => 
                <TaskElement 
                  key={task.id} 
                  updateTask={updateTask}
                  removeTask={removeTask}
                  task={task}
                />
              ) :
              tasks.map(task => 
                <TaskElement 
                  key={task.id} 
                  updateTask={updateTask}
                  removeTask={removeTask}
                  task={task}
                />
              )  
            }
          </TasksList>
        }
      </div>
      {/*
      <div className="counter__tasks" data-aos="fade-in">
        <p>Haz completado {doneTasks} de {tasks.length}</p>
      </div>*/}
      
    </div>
  );
}

export default App;
