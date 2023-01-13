import React, { HTMLInputTypeAttribute } from 'react';
import { Input } from './types/inputTypes';

const InputField = ({ name, placeholder }: Input): JSX.Element => {
    return <input type="text" name={name} id={name} placeholder={placeholder} className='input-field' />;
};

export default InputField;