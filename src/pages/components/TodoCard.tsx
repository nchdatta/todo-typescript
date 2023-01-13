import React from 'react';

const TodoCard = () => {
    return (
        <div className='todo-card'>
            <p>First Todo</p>
            <div className='todo-actions'>
                <button type='button' className='update-btn'>Update</button>
                <button type='button' className='delete-btn'>Delete</button>
            </div>
        </div>
    );
};

export default TodoCard;