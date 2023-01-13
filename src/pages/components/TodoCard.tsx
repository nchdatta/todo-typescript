import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import InputField from '../../components/InputField';
import { Todo } from '../../types/Todo';

interface Props {
    todo: Todo,
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoCard = ({ todo, setTodos }: Props) => {
    const [fieldOpen, setFieldOpen] = useState<boolean>(false);
    const [updateField, setUpdateField] = useState<string>('');


    return (
        <div className='todo-card'>
            <div>
                <p className='title'>{todo.title}</p>
                <p className='timestamp'>{todo.timestamp}</p>
            </div>
            <div className={`${fieldOpen ? 'show' : 'update-field'}`}>
                <InputField name='update'
                    defaultValue={todo.title}
                    placeholder={todo.title}
                    setUpdateField={setUpdateField} />

                <button onClick={() => {
                    setTodos((prevState: Todo[]): Todo[] => {
                        const filter = prevState.filter(t => t !== todo);
                        return [{ title: updateField, timestamp: new Date().toLocaleTimeString() }, ...filter];
                    });
                    setFieldOpen(!fieldOpen);
                }}>Up</button>
            </div>
            <div className='todo-actions'>
                <button type='button' className='update-btn' onClick={() => setFieldOpen(!fieldOpen)}>Update</button>
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