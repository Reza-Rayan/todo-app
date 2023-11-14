import React from 'react';

const TodoItem = ({ task, onRemoveTask, onToggleComplete }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
            />
            <p>{task.text}</p>
            <button className='delete-btn' onClick={() => onRemoveTask(task.id)}>
                Remove
            </button>
        </div>
    );
};


export default TodoItem;
