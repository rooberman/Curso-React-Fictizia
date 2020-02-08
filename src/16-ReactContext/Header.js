import React, {useContext} from 'react'
import LanguajeContext from './LanguajeContext'

export default props => {
    const context = useContext(LanguajeContext)
    return (
        <header>
            <button onClick={() => context.setLanguaje(context.languaje === 'es' ? 'en' : 'es')}>
                {context.languaje === 'es' ? 'cambiar idioma' : 'change languaje'}
            </button>
        </header>
    )
}