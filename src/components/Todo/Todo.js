import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import CreateTask from "../CreateTask/CreateTask";
//adding icon

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksRemaining, setTasksRemaining] = useState(0);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  //FUNCTIONS
  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const editTasks = (e) => {
    setTasks(e.target.value);
  };

  return (
    <section className="todo">
      <div>
        <CreateTask addTask={addTask} />
      </div>

      <div>
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            completeTask={completeTask}
            removeTask={removeTask}
            editTasks={editTasks}
          />
        ))}
        <hr />
        <p className="tasks-remain rounded-2 p-2">
          کارهای باقیمانده امروز: ({tasksRemaining}){" "}
        </p>
      </div>
    </section>
  );
};

export default Todo;
