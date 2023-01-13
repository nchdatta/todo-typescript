import React, { MutableRefObject, useRef } from 'react';
import InputField from '../../components/InputField';
import { AddTodo } from '../../types/AddTodo';

const Form = ({ handleAddTdodo }: AddTodo) => {

    return (
        <form className='todo-form' onSubmit={handleAddTdodo}>
            <InputField name='todo' placeholder='Enter todo text' />
            <button type="submit" >Add Todo</button>
        </form>
    );
};

export default Form;