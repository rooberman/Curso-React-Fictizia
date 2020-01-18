import React from 'react'

export default props =>
    <li key={props.id}>
        <p>{props.valor}
            <button onClick={() => props.removeTask(props.id)}>-</button>
            <button onClick={() => props.updateTask(props.id)}>Actualizar</button>
        </p>
    </li>