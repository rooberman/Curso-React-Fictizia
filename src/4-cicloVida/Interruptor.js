import React from "react";
import TestUsers from "./TestUsers";

class Interruptor extends React.Component {
    state = {
        status: true
    };

    toggleTestComponent = () => {
        this.setState({ status: !this.state.status });
    };

    render() {
        return (
            <>
                {this.state.status ? <TestUsers /> : ""}
                <button onClick={this.toggleTestComponent}>
                    mostrar/ocultar
                </button>
            </>
        );
    }
}

export default Interruptor;
