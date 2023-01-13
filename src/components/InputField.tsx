import React, { HTMLInputTypeAttribute } from 'react';
import { Input } from './types/Input';

const InputField = ({ name, placeholder }: Input) => {
    return <input type="text" name={name} id={name} placeholder={placeholder} className='input-field' />;
};

export default InputField;