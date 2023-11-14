import React, { useState } from 'react';
import './App.css'


//import components
import TodoList from './components/TodoList';
import TaskForm from './components/TaskForm';

const App = () => {
  //define states
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Todo');


  //handle add task form
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: Date.now(),
        text: newTask,
        completed: false,
        status: selectedStatus,
      };

      // Check if the status is "Done" and mark the task as completed
      if (selectedStatus === 'Done') {
        newTaskObject.completed = true;
      }

      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };
  
  //handle status task form
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  //handle remove task form
  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };


  //handle complete task form
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <TaskForm newTask={newTask}
        selectedStatus={selectedStatus}
        onStatusChange={handleStatusChange}
        onclickTask={(e) => setNewTask(e.target.value)}
        handleAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onRemoveTask={handleRemoveTask}
        onToggleComplete={handleToggleComplete}
        selectedStatus={selectedStatus}
      />
    </div>
  );
};

export default App;
