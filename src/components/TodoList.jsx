import React from 'react';
import TodoItem from './TaskItem';

const App = ({ tasks, onRemoveTask, onToggleComplete }) => {
    return (
        <ul className='task-list'>
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onRemoveTask={onRemoveTask}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </ul>
    );
};

export default App;
