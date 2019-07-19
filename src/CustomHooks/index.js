import {useState} from 'react';

const useSignUpForm = callback => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = event => {
        event && event.preventDefault();
        callback();
    }

    const handleInputChange = event => {
        event.preventDefault();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs,
    };
}

export {
    useSignUpForm,
}