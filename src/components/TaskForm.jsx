import React from 'react'

const TaskForm = ({ newTask, handleAddTask, onclickTask, selectedStatus, onStatusChange }) => {
    return (
        <div className='task-form'>
            <input
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={onclickTask}
            />
            <select value={selectedStatus} onChange={onStatusChange}>
                <option value="Todo">Todo</option>
                <option value="Done">Done</option>
            </select>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default TaskForm