import React from 'react'

class Contador extends React.Component {

    state = {
        valor: 0
    }

    /* Esta es la forma mas correcta, no hace falta bindear */
    increment = () => {
        this.setState(state => ({ valor: state.valor + 1  }));
    }

    /*
    Al hacer la llamada es necesario usar () => pero esto genera la función cada 
    vez que pasa por el render y puede provocar problemas de rendimiento
    */
    decrement() {
        this.setState(state => ({ valor: state.valor - 1  }));
    }

    render() {
        return (
            <>
                <p>Contador: {this.state.valor}</p>
                <button onClick={this.increment}>Incrementar</button>
                <button onClick={() => this.decrement()}>Decrementar</button>
            </>
        );
    }
}

export default Contador