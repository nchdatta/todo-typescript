import React, { Dispatch, SetStateAction } from 'react';
import { Todo } from '../../types/Todo';

interface Props {
    todo: Todo,
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoCard = ({ todo, setTodos }: Props) => {
    return (
        <div className='todo-card'>
            <div>
                <p className='title'>{todo.title}</p>
                <p className='timestamp'>{todo.timestamp}</p>
            </div>
            <div className='todo-actions'>
                <button type='button' className='update-btn'>Update</button>
                <button type='button' className='delete-btn' onClick={() => {
                    setTodos((prevState: Todo[]): Todo[] => {
                        const newTodo = prevState.filter(state => state !== todo);
                        return newTodo;
                    });
                }}>Delete</button>
            </div>
        </div>
    );
};

export default TodoCard;