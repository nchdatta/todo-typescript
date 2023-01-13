import React from 'react';
import InputField from '../../components/InputField';

const Form = () => {
    return (
        <form className='todo-form'>
            <InputField name='todo' placeholder='Enter todo text' />
            <button type="submit" >Add Todo</button>
        </form>
    );
};

export default Form;