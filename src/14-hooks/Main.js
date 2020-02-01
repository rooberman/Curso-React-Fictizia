import React, {useState} from 'react'
import ReplaceLetter from './ReplaceLetter'
import CallApi from './CallApi'
import InputDirty from './InputDirty'
import {useCallApi} from './CustomHooks' // Exportamos entre llaves por que CustomHooks no exporta nada por defecto

function Main() {
    const [show, setShow] = useState(true)

    const data = useCallApi('https://jsonplaceholder.typicode.com/todos')

    return (
        <>
            <span>input 'zamarro' to show error:<InputDirty /></span>

            <button onClick={() => setShow(!show)}>toggle replace</button>
            <ReplaceLetter show={show} />

            {/* <CallApi /> */} {/* El componente CallApi dibuja la lista de datos del fetch */}

            {/* Este bloque dibuja la lista del fetch ejecutado por el hook personalizado (CustomHooks)  */}
            {data &&
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            }
        </>
    )
}

export default Main