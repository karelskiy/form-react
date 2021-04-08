import { useCallback } from 'react';
import data from './data.json';

import Form from './components/Form/Form';

import './App.css';

const App = () => {
    const handleSubmit = useCallback(data => {
        const object = {};

        data.forEach((value, key) => {
            object[key] = value;
        });
        console.log('Parsed FormData:', object); // results
    }, []);

    return <section className='root'>
        <Form fields={data} onSubmit={handleSubmit} />
    </section>
};

export default App;
