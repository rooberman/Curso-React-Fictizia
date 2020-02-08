import React, { Component } from 'react'
import LanguajeContext from './LanguajeContext'

export default class Text extends Component {
    static contextType = LanguajeContext

    render() {
        return (
        <p>{this.context.languaje === 'es' ? 'Hola' : 'Hello'}</p>
        )
    }
}
