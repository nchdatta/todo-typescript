import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Input } from './types/Input';

interface Props {
    name: string,
    placeholder?: string,
    defaultValue?: string,
    setUpdateField?: Dispatch<SetStateAction<string>>
}

const InputField = ({ name, placeholder, defaultValue, setUpdateField }: Props) => {
    return <input type="text"
        name={name} id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='input-field'
        onChange={(e) => {
            setUpdateField(e.currentTarget.value);
        }} />;
};

export default InputField;