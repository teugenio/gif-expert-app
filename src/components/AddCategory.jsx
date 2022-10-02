import { useState } from "react"

export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // NOTA ! no es necesario pasar el parametro evento desde el onchange del input value
    const onInputChange = (evento) => {
        // console.log(evento.target.value);
        setInputValue(evento.target.value);
    }

    const onSubmit = (event) => {
        // console.log(event);
        event.preventDefault(); // detiene el evento

        if (inputValue.trim().length < 1) return;

        // setCategories( cat => [ ...cat, inputValue]); // mandamos un callback a la funcion (cat=categorias viejas)
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
            type="text"
            placeholder="Buscar gif"
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>      

    )
}
