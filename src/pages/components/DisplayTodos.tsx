import React from 'react';
import TodoCard from './TodoCard';

const DisplayTodos = () => {
    return (
        <div className='display-todos'>
            <h3>Todos</h3>
            <div className="todos-cards">
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    );
};

export default DisplayTodos;