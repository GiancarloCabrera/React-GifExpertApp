import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {
                                //Se pone un string vacio, porque si no se pone nada
                                // queda como undefined y falla
    const [inputValue, setInputValue] = useState('');
    const handleInput = (e) => {
        setInputValue(e.target.value)
        console.log(e.target.value);
    }
    const handleSubmit = (e) => {
        //Esto se usa para prevenir que el fromulario se refresque solo
        e.preventDefault();
        console.log('Formulario Hecho!!!!')
        //trim borra todos los espacios de un string
        //Si inputValue tiene mas de dos valores
        if (inputValue.trim().length > 2) {
            //El setCategories trae por defecto los valores que fueron incluidos cuando
            //el setCategories fue creado
            setCategories(cats => [inputValue, ...cats]);//inputValue contiene el valor insertado en el input
            //Ese cats contiene todos los valores almacenados hasta el momento
            //setInputValue('');
        }
    }
  return (
    //El formulario se sube cuando se presione enter
    <form onSubmit={ handleSubmit }>
        <h1>{ inputValue }</h1>
        {/* Se llama el input, el cual su valor sera lo que contenga
            el inputValue, onChange, osea cada vez que haya un cambio en ese input, se llama la funcion
            la cual le va a setear el nuevo valor escrito al inputValue, encargado de almacenar la info
            del input */}
        <input
            type="text"
            value={ inputValue }
            onChange={ handleInput }
        />
    </form>
  )
}

//La funcion setCategories es requerida obligatoriamente

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}