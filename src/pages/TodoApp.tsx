import React from 'react';
import DisplayTodos from './components/DisplayTodos';
import Form from './components/Form';

const TodoApp = () => {
    return (
        <div className='todo-app'>
            <h2>Todo Application</h2>
            <Form />
            <DisplayTodos />
        </div>
    );
};

export default TodoApp;