import { useCallback } from 'react';

import TextField from '@material-ui/core/TextField';

const FormFieldDate = ({ value = '', name, required, label, onChange }) => {
    const handleChange = useCallback(event => {
        onChange(event.target.value)
    }, [onChange]);

    return <TextField
        fullWidth
        value={value}
        name={name}
        label={label}
        onChange={handleChange}
        required={required}
        margin='normal'
        variant='outlined'
        type='date'
        InputLabelProps={{
            shrink: true
        }}
    />;
}

export default FormFieldDate;
