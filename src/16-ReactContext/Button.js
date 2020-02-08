import React, {useContext} from 'react'
import LanguajeContext from './LanguajeContext'

export default function Button() {
    const context = useContext(LanguajeContext)
    return (
        <button>{context.languaje === 'es' ? 'pulsame' : 'click me'}</button>
    )
}
