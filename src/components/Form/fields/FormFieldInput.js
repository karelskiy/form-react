import { useCallback } from 'react';

import TextField from '@material-ui/core/TextField';

const FormFieldInput = ({ name, value = '', readonly, required, label, placeholder, onChange }) => {
    const handleChange = useCallback(event => {
        onChange(event.target.value)
    }, [onChange]);

    return <TextField
        margin='normal'
        variant='outlined'
        fullWidth
        name={name}
        value={value}
        onChange={handleChange}
        label={label}
        placeholder={placeholder}
        disabled={readonly}
        required={required}
    />
}

export default FormFieldInput;
