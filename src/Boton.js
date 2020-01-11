import React from 'react'

/* los componentes que no tienen estado mejor que sean funciones (no clases) para que el resultado final sea mas ligero */
export default props => <button onClick={props.onPress}>{props.texto}</button>;