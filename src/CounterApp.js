import React, {Fragment, useState} from "react";
import PropTypes from 'prop-types';

// Crear funciones regresar contador a valor inicial y para reducir el contador en 1.
// Fijar funciones a botones Reset y -1.

const CounterApp = ({contador = 10}) => {

    const [counter, setCounter] = useState(0)

    const handleAdd  = (e) => {
        setCounter(counter + 1)
    }

    return (
        <Fragment>
            <h1>Contador</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>+1</button>
            <button>Reset</button>
            <button>-1</button>
        </Fragment>
    )
}

CounterApp.propTypes = {
    contador: PropTypes.number
}

export default CounterApp;
