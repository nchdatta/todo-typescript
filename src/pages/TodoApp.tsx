import { FormEvent, useRef, useState } from 'react';
import { Todo } from '../types/Todo';
import Form from './components/Form';
import TodoCard from './components/TodoCard';

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const todo = e.currentTarget.todo.value;
        const timestamp = new Date().toLocaleTimeString();
        setTodos((prev) => [{ title: todo, timestamp: timestamp }, ...prev]);

        e.currentTarget.reset();
    }



    return (
        <div className='todo-app'>
            <h2>Todo Application</h2>

            <Form handleAddTdodo={handleAddTodo} />
            <div className='display-todos'>
                <h3>Todos</h3>
                <div className="todos-cards">
                    {todos.length === 0 && <p>No todos saved.</p>}
                    {todos.map(todo => <TodoCard todo={todo} setTodos={setTodos} />)}
                </div>
            </div>
        </div>
    );
};

export default TodoApp;