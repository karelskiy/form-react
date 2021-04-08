import { useState, useCallback } from 'react';
import FormFieldInput from './fields/FormFieldInput';
import FormFieldCheckbox from './fields/FormFieldCheckbox';
import FormFieldDate from './fields/FormFieldDate';
import FormFieldSpace from './fields/FormFieldSpace';
import FormFieldSelect from './fields/FormFieldSelect';
import FormFieldFile from './fields/FormFieldFile';

import Button from '@material-ui/core/Button';

import './Form.css';

const FIELDS_MAP = {
    TEXT_FIELD: FormFieldInput,
    CHECKBOX: FormFieldCheckbox,
    DATE_INPUT_DROPDOWN: FormFieldDate,
    SPACING: FormFieldSpace,
    COUNTRY_SELECT: FormFieldSelect,
    FILE_INPUT: FormFieldFile
};

const Form = ({ fields, onSubmit }) => {
    const [values, setValues] = useState({});

    const handleChange = useCallback(name => value => {
        setValues(values => ({ ...values, [name]: value }))
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const formData = new FormData();

        for (let key in values ) {
            formData.append(key, values[key]);
        }

        onSubmit(formData);
    }, [values, onSubmit]);

    return <form className='form' autoComplete='off' onSubmit={handleSubmit}>
        {
            fields.map(field => {
                const FieldComponent = FIELDS_MAP[field.type];
                return FieldComponent ? <div key={field._id}>
                    <FieldComponent {...field} onChange={handleChange(field.name)} value={values[field.name]} />
                </div> : null;
            })
        }
        <div className='submitBtn'>
            <Button
                variant='contained'
                color='primary'
                type='submit'
            >
                Submit
            </Button>
        </div>
    </form>
}

export default Form;
