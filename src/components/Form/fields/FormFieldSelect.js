import { useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const COUNTRIES = [
    { id: 0, name: 'Ukraine', value: 'ua' },
    { id: 1, name: 'France', value: 'fr' },
    { id: 2, name: 'England', value: 'en' }
]

const FormFieldSelect = ({ name, value = '', label, onChange }) => {
    const handleChange = useCallback(event => {
        onChange(event.target.value)
    }, [onChange]);

    return <TextField
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
        margin='normal'
        variant='outlined'
        select
        fullWidth
    >
        {
            COUNTRIES.map(({ value, name }, i) => (
                <MenuItem key={i} value={value}>
                    {name}
                </MenuItem>
            ))
        }
    </TextField>
}

export default FormFieldSelect;
