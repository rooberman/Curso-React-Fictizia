import React from 'react'

class SesionTest extends React.Component {

    state = {
        logged: false
    }

    handleClick() {
        this.setState({ logged: !this.state.logged });
    }
    
    render() {
        return (
            <>
            <button onClick={this.handleClick.bind(this)}>{this.state.logged ? 'Cerrar sesión' : 'Iniciar sesión'}</button>
            <p>
                {this.state.logged ? 'Inicia sesión para ver contenido privado' : 'Esta pagina solo puedo verla por que estoy logueado'}
            </p>
            </>
        );
    }
}

export default SesionTest