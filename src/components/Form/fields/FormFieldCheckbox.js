import React, {useCallback} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const FormFieldCheckbox = ({ name, label, value = [], onChange, checkboxList = [] }) => {
    const handleChange = useCallback(optionLabel => event => {
        onChange(event.target.checked ? [...value, optionLabel] : value.filter(option => option !== optionLabel))
    }, [value, onChange]);

    return <React.Fragment>
        <FormLabel component='legend'>{label}</FormLabel>
        {checkboxList.map(({ value: label, checked, disabled }, i) => {
            return <FormControlLabel
                key={i}
                control={
                    <Checkbox
                        name={name}
                        checked={value.some(option => option === label)}
                        onChange={handleChange(label)}
                        color='primary'
                        disabled={disabled}
                    />
                }
                label={label}
            />
        })}
    </React.Fragment>
}

export default FormFieldCheckbox;
