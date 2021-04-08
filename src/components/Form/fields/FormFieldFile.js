import { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    input: {
        display: 'none'
    },
});

export default function UploadButtons({ label, value, onChange }) {
    const classes = useStyles();

    const handleChange = useCallback(event => {
        onChange(event.target.files[0])
    }, [onChange]);

    return (
        <div className={classes.root}>
            <label>
                <input
                    accept='image/*'
                    className={classes.input}
                    onChange={handleChange}
                    type='file'
                />
                <Button variant='contained' color='primary' component='span'>
                    {label || 'UPLOAD'}
                </Button>
            </label>
            {value && <Typography>{value.name}</Typography>}
        </div>
    );
}
