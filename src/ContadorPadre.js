import React from 'react'
import Boton from './Boton';
import Texto from './Texto';

class ContadorPadre extends React.Component {

    state = {
        valor: 0
    }

    increment = () => {
        this.setState(state => ({ valor: state.valor + 1 }));
    }

    decrement = () => {
        this.setState(state => ({ valor: state.valor - 1 }));
    }

    render() {
        return (
            <>
                <Texto contenido={`Valor del contador padre: ${this.state.valor}`} />
                <Boton texto="Incrementar" onPress={this.increment} />
                <Boton texto="Decrementar" onPress={this.decrement} />
            </>
        );
    }
}

export default ContadorPadre