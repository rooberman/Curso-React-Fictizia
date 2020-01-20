import React from 'react'
import { strict } from 'assert';

class ContadorString extends React.Component {

    state = {
        valor: ''
    }

    increment = () => {
        this.setState(state => ({ valor: state.valor + 'a' }));
    }

    decrement = () => {
        this.setState(state => ({ valor: state.valor.slice(0, -1) }));
    }

    render() {
        return (
            <>
                <p>Cadena: {this.state.valor}</p>
                <button onClick={this.increment}>Aumentar cadena</button>
                <button onClick={this.decrement}>Reducir cadena</button>
            </>
        );
    }
}

export default ContadorString