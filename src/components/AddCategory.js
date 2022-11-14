import React, { useState } from 'react'    
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Buscar en Gifs App')

    const handleInpuntChange = element => { setInputValue(element.target.value) }

    const handleSubmit = element => {
        element.preventDefault();
        //console.log('salio bien')
        if(inputValue.trim().length > 0){
            setCategories(categorie =>[inputValue,...categorie]);
            setInputValue('')
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInpuntChange}
            />
        </form>
    )

}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}