import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './search.css';

export const SearchAdvice = ({setAdvice}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setAdvice(inputValue);
            setInputValue('')
        }
    }

    return (
        <form className="formAdvice" onSubmit={handleSubmit}>
            <input
                className="inputAdvice"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button className="btnAdvice" type="submit">Buscar</button>
        </form>
    )
}

SearchAdvice.prototype = {
    setAdvice: PropTypes.func.isRequired
}